/* eslint-disable react/prop-types */
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
            <div className="w-full h-[15rem] md:h-[30rem] relative flex items-center">
                <img
                    className="object-cover w-full h-full z-0"
                    src="https://www.excel-communications.com/wp-content/uploads/2021/04/artem-kniaz-DqgMHzeio7g-unsplash-scaled.jpg"
                />
                <div className="text-white absolute w-[40rem] font-[700] left-4 text-inter text-[2rem] md:text-[4rem] text-left z-10">
                    WILLKOMMEN LIEBE ELTERN!
                </div>
            </div>
            <div className="font-[700] p-4 xl:p-0 text-[1.8rem] md:text-[2.4rem] text-left">
                Ferienprogramm
            </div>
            <div className="h-[5rem] w-full flex items-center bg-pink-500">
                <select className="bg-white text-xl h-8 drop-shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
                    <option>All Vacations</option>
                    <option>Pfingsten</option>
                    <option>Sommerferien</option>
                    <option>Herbstferien</option>
                    <option>Weihnachtsferien</option>
                    <option>Faschingsferien</option>
                    <option>Osterferien</option>
                </select>
            </div>
            <div className="w-full bg-yellow-500 grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center p-2 m-auto">
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
                <OverviewEventCard event={data[0]} key={data[0].id} />
            </div>
        </Layout>
    )
}
