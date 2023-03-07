import { FC, ReactNode } from 'react'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { DiscordIcon, GithubIcon, MailIcon, NpmIcon } from './icons'
import Link from 'next/link'
import Navbar from './navbar'
import Image from 'next/image'
import Project from './project'

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
            <section id="about">
                <div className="bg-gray-900 py-12">
                    <h1 className="mb-8 block text-center text-5xl">{dict.about.title}</h1>
                    <div className="mx-auto max-w-4xl text-justify">
                        <p>{dict.about.text}</p>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="bg-gray-800 py-12">
                    <h1 className="mb-8 block text-center text-5xl">{dict.projects.title}</h1>
                    <Project
                        name="mytriproutes.com"
                        src="https://mytriproutes.com/?ignore_indev"
                        link="https://mytriproutes.com"
                        dict={dict.projects.mytriproutes}
                        techHeader={dict.projects.tech}
                        side="left"
                        skillsUnder
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
                    <Project
                        src="https://linear-transformations.fkrawczyk.pl"
                        dict={dict.projects.ltv}
                        techHeader={dict.projects.tech}
                        name="Linear transformations visualization"
                        link="https://github.com/fmkra/linear-transformations-visualization"
                        side="left"
                    >
                        <Tech icon="p5js.webp">p5.js</Tech>
                        <Tech icon="typescript.svg">typescript</Tech>
                        <Tech icon="react.svg">React</Tech>
                        <Tech icon="css.svg">CSS</Tech>
                        <Tech icon="html.svg">HTML</Tech>
                    </Project>
                </div>
            </section>
        </>
    )
}
