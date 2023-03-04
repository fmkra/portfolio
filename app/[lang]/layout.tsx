import './globals.css'
import { i18n } from '../../i18n-config'

export const metadata = {
    title: '',
    description: '',
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
    return (
        <html lang={params.lang} className="scroll-smooth bg-gray-800 text-white">
            <body>{children}</body>
        </html>
    )
}
