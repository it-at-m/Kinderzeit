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
                <ul className="flex items-center">
                    <a
                        href="https://form.typeform.com/to/ytDRyAwL"
                        className="font-lato-bold tracking-widest text-[20px]"
                    >
                        Event hinzufügen
                    </a>
                    <a
                        className="text-white cursor-pointer ml-12 bg-cyan-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:block hidden "
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
