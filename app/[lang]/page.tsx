import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { DiscordIcon, GithubIcon, MailIcon, NpmIcon } from './icons'
import Link from 'next/link'

const hoverUnderline =
    'relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <section id="home">
                <div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-gray-800">
                    <div>
                        <p>{dict.title.welcome}</p>
                        <div className="w-fit">
                            <h1 className="text-[clamp(1.5rem,min(10vw,20vh),4rem)]">Filip Krawczyk</h1>
                            <p className="text-right">{dict.title.iam}</p>
                        </div>
                        <h2 className="text-[clamp(1.5rem,min(6vw,12vh),2.4rem)]">{dict.title.job}</h2>
                    </div>
                    <div className="absolute top-0 left-0 right-0 flex p-5">
                        <nav>
                            <ul className="m-5 flex gap-10">
                                <li>
                                    <a href="#home" className={hoverUnderline}>
                                        {dict.nav.home}
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className={hoverUnderline}>
                                        {dict.nav.about}
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className={hoverUnderline}>
                                        {dict.nav.projects}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="ml-auto flex flex-wrap justify-end">
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
                </div>
            </section>
            <section id="about">about</section>
        </>
    )
}
