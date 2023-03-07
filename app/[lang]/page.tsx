import { FC, ReactNode } from 'react'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { DiscordIcon, GithubIcon, MailIcon, NpmIcon } from './icons'
import Link from 'next/link'
import Navbar from './navbar'
import Image from 'next/image'

const Tech = ({ icon, children }: { icon: string; children: string }) => {
    return (
        <div className="flex justify-center rounded-md border border-white p-1">
            <Image src={`/icons/${icon}`} alt={children + ' icon'} height={24} width={24} />
            <span className="ml-1">{children}</span>
        </div>
    )
}

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <section id="home">
                <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-800">
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
                    <div className="mx-auto my-12 grid max-w-6xl grid-cols-1 gap-4 p-5 text-justify md:grid-cols-5">
                        <article className="contents">
                            <div className="md:order-2 md:col-span-2">
                                <h2 className="mb-4 text-center text-2xl">
                                    <Link href="https://mytriproutes.com">mytriproutes.com</Link>
                                </h2>
                                <section>
                                    <p>{dict.projects.mytriproutes.description}</p>
                                </section>
                                <section>
                                    <p className="mt-4 mb-2">{dict.projects.tech}:</p>
                                    <div className="flex flex-wrap gap-1 after:grow-[100000] [&>*]:grow">
                                        <Tech icon="typescript.svg">typescript</Tech>
                                        <Tech icon="react.svg">React</Tech>
                                        <Tech icon="nextjs.svg">Next.js</Tech>
                                        <Tech icon="leaflet.svg">leaflet</Tech>
                                        <Tech icon="scss.svg">scss</Tech>
                                        <Tech icon="tailwind.svg">tailwind</Tech>
                                        <Tech icon="django.svg">django</Tech>
                                        <Tech icon="rest.png">REST framework</Tech>
                                        <Tech icon="postgresql.svg">postgresql</Tech>
                                        <Tech icon="elastic.svg">elasticsearch</Tech>
                                        <Tech icon="celery.webp">celery</Tech>
                                        <Tech icon="stripe.svg">stripe</Tech>
                                        <Tech icon="git.svg">git</Tech>
                                        <Tech icon="docker.svg">docker</Tech>
                                        <Tech icon="npm.svg">npm</Tech>
                                    </div>
                                </section>
                            </div>
                            <iframe
                                src="https://mytriproutes.com/?ignore_indev"
                                className="h-[50vh] w-full bg-white md:order-1 md:col-span-3"
                            />
                        </article>
                        <article className="contents">
                            <div className="md:order-3 md:col-span-2">
                                <h2 className="mb-4 text-center text-2xl">
                                    <Link href="https://github.com/fmkra/next-gallery">next-gallery</Link>
                                </h2>
                                <section>
                                    <p>{dict.projects.nextGallery.description}</p>
                                </section>
                                <section>
                                    <p className="mt-4 mb-2">{dict.projects.tech}:</p>
                                    <div className="flex flex-wrap gap-1 after:grow-[100000] [&>*]:grow">
                                        <Tech icon="typescript.svg">typescript</Tech>
                                        <Tech icon="react.svg">React</Tech>
                                        <Tech icon="nextjs.svg">Next.js</Tech>
                                        <Tech icon="git.svg">git</Tech>
                                        <Tech icon="npm.svg">npm</Tech>
                                    </div>
                                </section>
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
