import { usePathname } from "@/i18n/routing"

const useLastpath = () => {
    const pathname = usePathname()
    const pathnames = pathname.split('/')
    const path: string = pathnames[pathnames.length - 1]
    return path
}
export default useLastpath