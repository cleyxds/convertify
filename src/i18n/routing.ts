import { defineRouting } from "next-intl/routing"
import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { i18n } from "./i18n-config"

export const routing = defineRouting({
  ...i18n,
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
