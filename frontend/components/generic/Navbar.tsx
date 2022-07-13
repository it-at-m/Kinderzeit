/* eslint-disable @next/next/no-img-element */

import React from 'react'

export default function Navbar() {
    return (

        <div className="bg-gradient-to-r pb-1 from-yellow-500 via-green-500 via-blue-300 via-purple-500 via-pink-500 to-red-500">
   <header>
            <nav className="bg-white px-4 lg:px-6 py-2.5 bg-white">
                <div className="flex flex-wrap justify-between space-x-20 items-center mx-auto max-w-screen-xl">
                    <a href="" className="flex items-center">
                        <img
                            className=" absolute w-[20rem] h-[2.5rem]"
                            src="Logo.png"
                        ></img>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="text-white bg-cyan-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:block hidden "
                        >
                            Anmelden
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
                </div>
            </nav>
        </header>
</div>

        
    )
}
