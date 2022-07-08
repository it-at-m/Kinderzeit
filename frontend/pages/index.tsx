/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Layout from '../components/generic/Layout'
import OverviewEventCard from '../components/overview/OverviewEventCard'

export async function getServerSideProps() {
    const res = await fetch(`${process.env.ROOT_API_URL}/api/event/all`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

// eslint-disable-next-line react/prop-types
export default function Home({ data }) {
    return (
        <Layout>
            <div className="w-screen h-[50rem] relative">
                <div className="absolute w-[115rem] h-[40rem]">
                    <img
                        className="object-cover w-[115rem] h-[40rem]"
                        src="https://www.excel-communications.com/wp-content/uploads/2021/04/artem-kniaz-DqgMHzeio7g-unsplash-scaled.jpg"
                    />
                </div>
                <div className="absolute w-2/5 top-[-8rem] h-[56rem] rem-[6.5rem] left-0 flex flex-col items-center justify-center">
                    <div className="text-[#ffffff] font-[700] text-inter text-[6rem] text-center ">
                        WILLKOMMEN LIEBE ELTERN!
                    </div>
                </div>
            </div>
            <div className="flex flex-row mr-[75rem] mt-[-05rem] left-0 items-center justify-center">
                <div className=" font-[700] text-inter text-[2.4rem] text-center ">
                    Ferienprogramm
                </div>
            </div>
            <div className="  h-[5rem] w-screen">
                <select className="ml-[10rem] w-[31rem] bg-white text-xl h-full drop-shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
                    <option>All Vacations</option>
                    <option>Pfingsten</option>
                    <option>Sommerferien</option>
                    <option>Herbstferien</option>
                    <option>Weihnachtsferien</option>
                    <option>Faschingsferien</option>
                    <option>Osterferien</option>
                </select>
            </div>
            <div className="w-screen px-[10rem] py-[3.5rem] grid grid-cols-3 gap-20 place-content-around ">
                {
                    // eslint-disable-next-line react/prop-types
                    data.map((event) => (
                        <OverviewEventCard event={event} key={event.id} />
                    ))
                }
            </div>
        </Layout>
    )
}
