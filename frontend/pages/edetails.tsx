/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'
import Layout from '../components/generic/Layout'
export default function details() {
    const [effect, setEffect] = useState(false)

    return (
        <Layout>
            <div className=" flex flex-col pt-12 w-screen">
                <div className=" flex flex-row  w-screen bg-stone-100 rounded-xl shadow-md overflow-hidden">
                    {/* <div className="md:flex">
                        <div className="md:shrink"> */}
                    <div className=" w-[40rem] h-[20rem]">
                        <img
                            className="object-cover w-[40rem] h-[30rem]"
                            src="https://images.unsplash.com/photo-1601913463731-cfba9fd31ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYWZmaXRpfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        />
                    </div>
                    <div className=" w-[40rem] h-[30rem]">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Case study
                        </div>
                        <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        >
                            Finding customers for your new business
                        </a>
                        <p className="mt-2 text-slate-500">
                            Getting a new business off the ground is a lot of
                            hard work. Here are five ideas you can use to find
                            your first customers.
                        </p>
                    </div>

                    {/* </div>
                    </div> */}
                </div>

                <div className=" pt-4 pr-10 flex justify-end">
                    <button
                        className={`${
                            effect && 'animate-wiggle'
                        } bg-green-500 px-10 py-2 text-white rounded hover:bg-green-700 hover:shadow-xl`}
                        onClick={() => {
                            setEffect(true)
                        }}
                        onAnimationEnd={() => setEffect(false)}
                    >
                        Tickets
                    </button>
                </div>
                <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                    Ein Satz zum Graffiti Workshop für Kinder
                </div>
                <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                    Zu diesem Event
                </div>
                <div className=" px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                    Wenn ihr erfahren wollt, wie Künstler aus der Graffiti-Szene
                    heutzutage Werke auf der Straße entstehen lassen und wie ihr
                    euer eigenes, cooles Stencil erstellen könnt, dann seid ihr
                    in diesem Graffiti Workshop Kids im KUNSTLABOR 2 genau
                    richtig. Ihr lernt dabei zu sprayen, taggen und zu cutten –
                    alles was man für ein fertiges Graffiti-Werk braucht. Immer
                    mit dabei unsere Leiter, die dir Schritt für Schritt alles
                    erklären.
                </div>
                <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                    Wichtige Hinweise
                </div>
                <div className=" px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                    Alle Materialien werden gestellt. Bitte Kleidung mitnehmen,
                    die dreckig werden darf und eine FFP2 mitbringen. Auch eine
                    Getränkeflasche ist zu empfehlen.
                </div>
                <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                    Veranstalter
                </div>
                <div className="bg-stone-500 h-[30rem]">
                    {' '}
                    placeholder for map
                </div>
            </div>
        </Layout>
    )
}
