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
                <img className=" h-2/3 w-3/5  " src="https://cdn.pixabay.com/photo/2019/05/27/16/41/graffiti-4233073_960_720.jpg" />
                <div className="w-2/5 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col space-y-4  leading-normal">
                    
                    <div className="text-grey-300 text-xl  leading-tight">Graffiti Workshop
                        für Kinder</div>
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
                            <a className="flex justify-cenw-50 ter items-center top-60 right-0 mb-2 font-semibold  text-green-800">

                                <p>Noch 2 Plätze</p>
                            </a>
                        </div>

                    </div>

                </div>
            </div>


            {/* <div className="  flex justify-center ">
                <div className="w-full lg:w-1/2 p-3">
                    <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
                        <img src="https://tailwindcss.com/img/card-left.jpg" className=" block h-auto w-full lg:w-48 flex-none bg-cover" />
                    </div>
                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-black font-bold text-xl mb-2 leading-tight">Can  developer?</div>
        <p className="text-grey-darker text-base">Read more</p>
      </div>

                </div>


            </div> */}
        </Layout>
    )
}
