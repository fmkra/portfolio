'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, Locale } from '@/i18n-config'
import { FlagIcon } from './icons'

export default function ChangeLanguage({ lang }: { lang: Locale }) {
    const pathName = usePathname()
    const otherLang = lang == 'pl' ? 'en' : 'pl'

    const redirectedPathName = () => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = otherLang
        return segments.join('/')
    }

    return (
        <Link href={redirectedPathName()}>
            <FlagIcon locale={otherLang} className="mx-auto mt-[0.125rem] h-6" />
        </Link>
    )
}
