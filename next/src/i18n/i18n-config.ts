export const i18n = {
  defaultLocale: "pt-br",
  locales: ["pt-br"],
  localePrefix: "as-needed",
  localeDetection: false,
} as const

export type Locale = (typeof i18n)["locales"][number]
