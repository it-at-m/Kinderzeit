/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'
import Link from 'next/link'
import ReccomendationSlideshowModal from '../recommendations/RecommendationWizardModal'

export default function Navbar() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <>
            {modalOpen && (
                <ReccomendationSlideshowModal
                    {...{ modalOpen, setModalOpen }}
                />
            )}
            <nav className="bg-white z-10 flex justify-between items-center relative h-20">
                <Link href="/">
                    <div className="flex items-center hover:cursor-pointer ml-2">
                        <img
                            className="absolute w-[20rem] h-[2.5rem]"
                            src="/Logo.png"
                        />
                    </div>
                </Link>
                <ul className="flex items-center justify-around w-1/3 md:visible">
                    <a
                        href="https://form.typeform.com/to/ytDRyAwL"
                        className="font-lato-bold tracking-widest text-[20px]"
                    >
                        Event hinzufügen
                    </a>
                    <a
                        className="font-lato-bold cursor-pointer tracking-widest text-[20px]"
                        aria-current="page"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Empfehlung
                    </a>
                </ul>
                <div className="bg-gradient-to-r pb-1 from-yellow-500 via-pink-500 to-red-500 w-full absolute bottom-0" />
            </nav>
        </>
    )
}
