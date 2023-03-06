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
            <section id="projects">
                <div className="bg-gray-900 py-12">
                    <h1 className="block text-center text-6xl">{dict.projects.title}</h1>
                    <div className="mx-auto my-12 grid max-w-5xl grid-cols-1 gap-4 p-5 md:grid-cols-5">
                        <article className="contents">
                            <div className="md:order-2 md:col-span-2">
                                <h2 className="mb-4 text-center text-2xl">
                                    <Link href="https://mytriproutes.com">mytriproutes.com</Link>
                                </h2>
                                <p>{dict.projects.mytriproutes}</p>
                            </div>
                            <iframe
                                src="https://mytriproutes.com"
                                className="h-[50vh] w-full bg-white md:order-1 md:col-span-3"
                            />
                        </article>
                        <article className="contents">
                            <div className="md:order-3 md:col-span-2">
                                <h2 className="mb-4 text-center text-2xl">
                                    <Link href="https://github.com/fmkra/next-gallery">next-gallery</Link>
                                </h2>
                                <p>{dict.projects.nextGallery}</p>
                            </div>
                            <iframe
                                src="https://next-gallery.fkrawczyk.pl/basic"
                                className="h-[50vh] w-full bg-gray-800 md:order-4 md:col-span-3"
                            />
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
