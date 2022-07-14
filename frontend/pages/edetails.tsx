/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Layout from '../components/generic/Layout'
export default function details() {
    return (
        <Layout>
            {/* <div className=''>
<img className='blur-sm flex flex-col w-screen' src="https://cdn.pixabay.com/photo/2019/05/27/16/41/graffiti-4233073_960_720.jpg" ></img>

</div> */}

            <div className=" pt-12 flex lg:flex-row-reverse rounded overflow-hidden border">
                <img
                    className=" h-2/3 w-3/5  "
                    src="https://cdn.pixabay.com/photo/2019/05/27/16/41/graffiti-4233073_960_720.jpg"
                />
                <div className="w-2/5 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col space-y-4  leading-normal">
                    <div className="text-grey-300 text-xl  leading-tight">
                        Graffiti Workshop für Kinder
                    </div>
                    <div className="">
                        <div className="pt-2">
                            <p className="font-200 text-sm text-gray-400">
                                Datum and Uhrzeit
                            </p>
                            <div className="flex space-x-12">
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    Mi., 10. Aug. 22,
                                </span>
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    10:30 - 13:00 Uhr
                                </span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="font-200 text-sm text-gray-400">
                                Alter
                            </p>
                            <div className="flex space-x-2">
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    8
                                </span>
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    -
                                </span>
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    7
                                </span>
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    Jahre
                                </span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="font-200 text-sm text-gray-400">
                                Verantstaltungsort
                            </p>
                            <div className="flex space-x-12">
                                <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                    Kunstlabor 2, Maxvorstadt
                                </span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="font-200 text-sm text-gray-400">
                                Kosten
                            </p>
                            <a className="flex justify-center items-center w-20 top-60 right-0 mb-2   rounded-lg bg-yellow-500 text-white text-s font-small">
                                <p>18€p.P.</p>
                            </a>
                        </div>
                        <div className="pt-2">
                            <p className="font-200 text-sm text-gray-400">
                                Verfügbarkeit
                            </p>
                            <a className="flex items-center top-60 right-0 mb-2 font-semibold  text-green-800">
                                <p>Noch 2 Plätze</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between border ">
                <button className="h-10 w-48 px-5 m-4 text-green-100 transition-colors duration-150 bg-green-800 rounded-lg focus:shadow-outline hover:bg-green-800">
                    Jetzt buchen
                </button>
                <button type="button" className="">
                    <i className="icon-heart"></i>
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 border">
                <div className="">
                    <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                        Ein Satz zum Graffiti Workshop für Kinder
                    </div>
                    <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.75rem] text-bottom">
                        Zu diesem Event
                    </div>
                    <div className="p-3 px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                        Wenn ihr erfahren wollt, wie Künstler aus der
                        Graffiti-Szene heutzutage Werke auf der Straße entstehen
                        lassen und wie ihr euer eigenes, cooles Stencil
                        erstellen könnt, dann seid ihr in diesem Graffiti
                        Workshop Kids im KUNSTLABOR 2 genau richtig. Ihr lernt
                        dabei zu sprayen, taggen und zu cutten – alles was man
                        für ein fertiges Graffiti-Werk braucht. Immer mit dabei
                        unsere Leiter, die dir Schritt für Schritt alles
                        erklären.
                    </div>
                    <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                        Wichtige Hinweise
                    </div>
                    <div className="p-3 px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                        Alle Materialien werden gestellt. Bitte Kleidung
                        mitnehmen, die dreckig werden darf und eine FFP2
                        mitbringen. Auch eine Getränkeflasche ist zu empfehlen.
                    </div>
                    <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                        Veranstalterinformationen
                    </div>
                    <div className="p-3 grid-rows-3  px-20 text-[#000000] font-[500] text-inter text-[0.9rem] text-bottom">
                        <div className="">KUNSTLABOR 2</div>
                        <div className="">Dachauer Str. 90</div>
                        <div className="">80335 München</div>
                        <div className="text-teal-600">Route Plan</div>
                    </div>
                </div>
                <div className="">
                    <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                        Müssen Eltern teilnehmen
                    </div>
                    <div className=" px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                        Nein
                    </div>
                </div>
                <div className="p-b-12"></div>
            </div>
        </Layout>
    )
}
