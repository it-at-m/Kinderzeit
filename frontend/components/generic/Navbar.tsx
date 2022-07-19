/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white z-10 flex justify-between items-center relative h-20">
            <Link href="/">
                <div className="flex items-center hover:cursor-pointer ml-2">
                    <img
                        className=" absolute w-[20rem] h-[2.5rem]"
                        src="/Logo.png"
                    />
                </div>
            </Link>
            <div className="flex items-center lg:order-2">
                <a
                    href="#"
                    className="text-white bg-cyan-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:block hidden "
                >
                    Konto
                </a>
                <button
                    data-collapse-toggle="mobile-menu-2"
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg lg:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-black-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                </button>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className=" absolute flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a
                            href="#"
                            className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black"
                            aria-current="page"
                        >
                            Ferienprogramm
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black"
                            aria-current="page"
                        >
                            Empfehlung
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black"
                            aria-current="page"
                        >
                            Event hinzufügen
                        </a>
                    </li>
                </ul>
            </div>
            <div className="bg-gradient-to-r pb-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500 w-full absolute bottom-0" />
        </nav>
    )
}
