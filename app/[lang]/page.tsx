import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { DiscordIcon, GithubIcon, MailIcon, NpmIcon } from './icons'
import Link from 'next/link'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-gray-800 text-white">
                <div>
                    <p>{dict.title.welcome}</p>
                    <div className="w-fit">
                        <h1 className="text-[clamp(1.5rem,min(10vw,20vh),4rem)]">Filip Krawczyk</h1>
                        <p className="text-right">{dict.title.iam}</p>
                    </div>
                    <h2 className="text-[clamp(1.5rem,min(6vw,12vh),2.4rem)]">{dict.title.job}</h2>
                </div>
                <div className="absolute top-0 right-0 m-5 flex w-fit">
                    <Link href="https://discord.com/users/302040960848625664" target="_blank">
                        <DiscordIcon className="m-5 h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                    </Link>
                    <Link href="https://npmjs.com/~kotmawszy" target="_blank">
                        <NpmIcon className="m-5 mt-[1.375rem] h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                    </Link>
                    <Link href="https://github.com/fmkra" target="_blank">
                        <GithubIcon className="m-5 h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                    </Link>
                    <Link href="mailto:kontakt@fkrawczyk.pl">
                        <MailIcon className="m-5 h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                    </Link>
                </div>
            </div>
            <div className="h-10">Test</div>
        </>
    )
}
