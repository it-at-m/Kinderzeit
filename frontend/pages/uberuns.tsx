/* eslint-disable @next/next/no-img-element */
import React from "react"
import Navbar from '../components/generic/Navbar'
import Footer from '../components/generic/Footer'

export default function Uberuns() {
    return (
        <>
        <Navbar/>
        <section className="h-screen w-screen" >
            <div className="flex flex-col h-full w-full items-center justify-center mx-auto px-8">
                <div className="">
                <div className=" rounded-xl m-3 bg-gradient-to-r p-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500">
                <img className="h-[25rem] items-center rounded-xl"
                    src="/Team.png"></img>
                    </div>
                    </div>

                <div className="max-w-2xl text-center">
                    <p className="mt-6 lg:text-lg text-black">We are team Seakers, a student group of the Digital Product School program here at Munich. We are currently developing a digital product with the support of
                        <span className="mt-6 ml-1 lg:text-lg text-black font-semibold">Landeshauptstadt München </span> with the goal
                        <span className="mt-6 ml-1 lg:text-lg text-black font-semibold">to help parents organize an amazing time for their kids during school holidays. </span> </p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}



