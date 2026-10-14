FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm directly with npm to avoid corepack issues on Alpine
RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
RUN pnpm i --frozen-lockfile

# Rebuild the source code
FROM base AS builder
WORKDIR /app
RUN npm install -g pnpm@latest
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Provide fallback build-time env vars so Next.js static generation succeeds
ARG DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/tree_removal"
ARG PAYLOAD_SECRET="build_secret_temp_key_123456789012"
ENV DATABASE_URL=${DATABASE_URL}
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}

RUN pnpm run build

# Production runner image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set correct permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
