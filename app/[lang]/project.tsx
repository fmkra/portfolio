'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'

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
                <InView rootMargin="100px">
                    {({ inView, ref }) => (
                        <div
                            className={`max-md:h-72 max-md:max-h-[80vh] max-md:min-h-[50vh] ${
                                side == 'left' ? 'md:order-1 md:col-start-1' : 'md:order-2 md:col-start-3'
                            } md:col-span-3 md:h-full md:max-h-screen`}
                            ref={ref}
                        >
                            {inView ? (
                                <iframe src={src} className="h-full w-full bg-white" />
                            ) : (
                                <div className="shimmer h-full w-full bg-gray-800"></div>
                            )}
                        </div>
                    )}
                </InView>
            </article>
        </div>
    )
}
export default Project
