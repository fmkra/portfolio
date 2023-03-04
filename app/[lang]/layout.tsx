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
        <html lang={params.lang} className="bg-gray-800">
            <body>{children}</body>
        </html>
    )
}
