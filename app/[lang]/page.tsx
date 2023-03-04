import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { DiscordIcon, GithubIcon, MailIcon, NpmIcon } from './icons'
import Link from 'next/link'
import Navbar from './navbar'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <section id="home">
                <div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-gray-800">
                    <main>
                        <div>
                            <p>{dict.title.welcome}</p>
                            <div className="w-fit">
                                <h1 className="text-[clamp(2rem,min(10vw,20vh),4rem)]">Filip Krawczyk</h1>
                                <p className="text-right">{dict.title.iam}</p>
                            </div>
                            <h2 className="text-[clamp(1.2rem,min(6vw,12vh),2.4rem)]">{dict.title.job}</h2>
                        </div>
                    </main>
                    <div className="absolute top-0 left-0 right-0 flex md:p-5">
                        <Navbar dict={dict.nav} lang={lang} />
                        <div className="ml-auto flex flex-wrap justify-end">
                            <Link className="m-5" href="https://discord.com/users/302040960848625664" target="_blank">
                                <DiscordIcon className="h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                            </Link>
                            <Link className="m-5" href="https://npmjs.com/~kotmawszy" target="_blank">
                                <NpmIcon className="h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                            </Link>
                            <Link className="m-5" href="https://github.com/fmkra" target="_blank">
                                <GithubIcon className="h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                            </Link>
                            <Link className="m-5 flex justify-center" href="mailto:kontakt@fkrawczyk.pl">
                                <MailIcon className="h-8 opacity-70 transition-all hover:cursor-pointer hover:opacity-100" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">about</section>
        </>
    )
}
