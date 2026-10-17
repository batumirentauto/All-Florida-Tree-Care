export interface ThemeConfig {
  name: string
  bgBody: string
  bgSection: string
  bgCard: string
  bgCardAlt: string
  borderSubtle: string
  borderAccent: string
  borderHover: string
  accentText: string
  accentTextHover: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  btnPrimary: string
  btnPrimaryHover: string
  btnShadow: string
  glow1: string
  glow2: string
}

export const THEMES: Record<string, ThemeConfig> = {
  emerald: {
    name: 'emerald',
    bgBody: 'bg-[#07130c]',
    bgSection: 'bg-[#0a1810]',
    bgCard: 'bg-[#0d1e15]',
    bgCardAlt: 'bg-[#09150e]',
    borderSubtle: 'border-emerald-500/20',
    borderAccent: 'border-emerald-500/40',
    borderHover: 'hover:border-emerald-400/60',
    accentText: 'text-emerald-400',
    accentTextHover: 'hover:text-emerald-300',
    badgeBg: 'bg-emerald-950/80',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-700/60',
    btnPrimary: 'bg-gradient-to-r from-emerald-600 to-green-700',
    btnPrimaryHover: 'hover:from-emerald-500 hover:to-green-600',
    btnShadow: 'shadow-emerald-700/30',
    glow1: 'bg-emerald-600/15',
    glow2: 'bg-green-600/15',
  },
  sky: {
    name: 'sky',
    bgBody: 'bg-[#071120]',
    bgSection: 'bg-[#091526]',
    bgCard: 'bg-[#0b1b30]',
    bgCardAlt: 'bg-[#081322]',
    borderSubtle: 'border-sky-500/20',
    borderAccent: 'border-sky-500/40',
    borderHover: 'hover:border-sky-400/60',
    accentText: 'text-sky-400',
    accentTextHover: 'hover:text-sky-300',
    badgeBg: 'bg-sky-950/80',
    badgeText: 'text-sky-300',
    badgeBorder: 'border-sky-700/60',
    btnPrimary: 'bg-gradient-to-r from-sky-600 to-blue-700',
    btnPrimaryHover: 'hover:from-sky-500 hover:to-blue-600',
    btnShadow: 'shadow-sky-700/30',
    glow1: 'bg-sky-600/15',
    glow2: 'bg-blue-600/15',
  },
  amber: {
    name: 'amber',
    bgBody: 'bg-[#120f08]',
    bgSection: 'bg-[#18130a]',
    bgCard: 'bg-[#201a0d]',
    bgCardAlt: 'bg-[#151108]',
    borderSubtle: 'border-amber-500/20',
    borderAccent: 'border-amber-500/40',
    borderHover: 'hover:border-amber-400/60',
    accentText: 'text-amber-400',
    accentTextHover: 'hover:text-amber-300',
    badgeBg: 'bg-amber-950/80',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-700/60',
    btnPrimary: 'bg-gradient-to-r from-amber-600 to-orange-700',
    btnPrimaryHover: 'hover:from-amber-500 hover:to-orange-600',
    btnShadow: 'shadow-amber-700/30',
    glow1: 'bg-amber-600/15',
    glow2: 'bg-orange-600/15',
  },
  teal: {
    name: 'teal',
    bgBody: 'bg-[#061414]',
    bgSection: 'bg-[#081a1a]',
    bgCard: 'bg-[#0c2424]',
    bgCardAlt: 'bg-[#071717]',
    borderSubtle: 'border-teal-500/20',
    borderAccent: 'border-teal-500/40',
    borderHover: 'hover:border-teal-400/60',
    accentText: 'text-teal-400',
    accentTextHover: 'hover:text-teal-300',
    badgeBg: 'bg-teal-950/80',
    badgeText: 'text-teal-300',
    badgeBorder: 'border-teal-700/60',
    btnPrimary: 'bg-gradient-to-r from-teal-600 to-emerald-700',
    btnPrimaryHover: 'hover:from-teal-500 hover:to-emerald-600',
    btnShadow: 'shadow-teal-700/30',
    glow1: 'bg-teal-600/15',
    glow2: 'bg-emerald-600/15',
  },
}

export function getTheme(themeName?: string): ThemeConfig {
  if (themeName && THEMES[themeName]) {
    return THEMES[themeName]
  }
  return THEMES.emerald
}
