import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <div className="w-screen min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
                <div>
                    <p>{dict.title.welcome}</p>
                    <div className="w-fit">
                        <h1 className="text-[clamp(1.5rem,min(10vw,20vh),4rem)]">Filip Krawczyk</h1>
                        <p className="text-right">{dict.title.iam}</p>
                    </div>
                    <h2 className="text-[clamp(1.5rem,min(6vw,12vh),2.4rem)]">{dict.title.job}</h2>
                </div>
            </div>
            <div className="h-10">Test</div>
        </>
    )
}
