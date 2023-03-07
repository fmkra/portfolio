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

const Project = ({
    src,
    dict,
    techHeader,
    children,
    name,
    link,
    side,
}: {
    src: string
    dict: { description: string; skills: string }
    techHeader: string
    children: ReactNode
    name: string
    link: string
    side: 'left' | 'right'
}) => {
    return (
        <div className="mx-auto my-6 grid max-w-6xl grid-cols-1 gap-4 p-5 text-justify md:grid-cols-5">
            <article className="contents">
                <div
                    className={`${
                        side == 'left' ? 'md:order-2 md:col-start-4' : 'md:order-1 md:col-start-1'
                    } md:col-span-2`}
                >
                    <h2 className="mb-4 text-center text-2xl">
                        <Link href={link}>{name}</Link>
                    </h2>
                    <section>
                        <p>{dict.description}</p>
                    </section>
                    <section>
                        <p className="mt-4 mb-2">{techHeader}:</p>
                        <div className="flex flex-wrap gap-1 after:grow-[100000] [&>*]:grow">{children}</div>
                    </section>
                </div>
                <section className="md:order-3 md:col-span-5">
                    <p>{dict.skills}</p>
                </section>
                <iframe
                    src={src}
                    className={`w-full bg-white max-md:h-72 max-md:max-h-[80vh] max-md:min-h-[50vh] ${
                        side == 'left' ? 'md:order-1 md:col-start-1' : 'md:order-2 md:col-start-3'
                    } md:col-span-3 md:h-full md:max-h-screen`}
                />
            </article>
        </div>
    )
}

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang)

    return (
        <>
            <section id="home">
                <div className="relative flex h-52 min-h-screen w-full flex-col items-center justify-center bg-gray-800 pt-16">
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
                            <Link className="m-5" href="https://npmjs.com/~fmkra" target="_blank">
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
                    <Project
                        name="mytriproutes.com"
                        src="https://mytriproutes.com/?ignore_indev"
                        link="https://mytriproutes.com"
                        dict={dict.projects.mytriproutes}
                        techHeader={dict.projects.tech}
                        side="left"
                    >
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
                    </Project>
                    <Project
                        name="next-gallery"
                        src="https://next-gallery.fkrawczyk.pl/basic"
                        link="https://github.com/fmkra/next-gallery"
                        dict={dict.projects.nextGallery}
                        techHeader={dict.projects.tech}
                        side="right"
                    >
                        <Tech icon="typescript.svg">typescript</Tech>
                        <Tech icon="react.svg">React</Tech>
                        <Tech icon="nextjs.svg">Next.js</Tech>
                        <Tech icon="git.svg">git</Tech>
                        <Tech icon="npm.svg">npm</Tech>
                    </Project>
                </div>
            </section>
        </>
    )
}
