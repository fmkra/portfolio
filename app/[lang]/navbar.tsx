'use client'

import { useState } from 'react'
import { HamburgerIcon } from './icons'

const hoverUnderline =
    'relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full'

export default function ({ dict }: { dict: { home: string; about: string; projects: string } }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className={`fixed top-0 left-0 z-10 h-screen w-screen bg-black opacity-50 md:hidden ${
                    open ? '' : 'hidden'
                }`}
                onClick={() => setOpen(false)}
            ></div>
            <nav>
                <ul
                    className={`z-20 flex w-full gap-10 bg-gray-800 p-5 text-center transition-[left] duration-300 max-md:fixed max-md:top-0 max-md:h-screen max-md:max-w-[10rem] max-md:flex-col max-md:shadow-equal ${
                        open ? 'max-md:left-0' : 'max-md:left-[-15rem]'
                    }`}
                >
                    <li>
                        <a href="#home" onClick={() => setOpen(false)} className={hoverUnderline}>
                            {dict.home}
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setOpen(false)} className={hoverUnderline}>
                            {dict.about}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setOpen(false)} className={hoverUnderline}>
                            {dict.projects}
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="md:hidden">
                <HamburgerIcon
                    onClick={() => setOpen((x) => !x)}
                    className="m-5 h-8 opacity-100 transition-all hover:cursor-pointer hover:opacity-100"
                />
            </div>
        </>
    )
}
