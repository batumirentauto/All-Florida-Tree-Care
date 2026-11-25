import { DIALER_HTML } from '../anastasia/dialerHtml'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(DIALER_HTML, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  })
}
