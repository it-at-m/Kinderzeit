import React from 'react'

import Footer from '../components/generic/Footer'
import Navbar from '../components/generic/Navbar'
import { RecommendationWizardState } from '../constants'

export async function getServerSideProps(context) {
    if (Object.keys(context.query).length == 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    } else {
        return {
            props: {
                ...context.query,
            },
        }
    }
    return
}

export default function RecommendationPage(props: RecommendationWizardState) {
    return (
        <>
            <Navbar />
            <main>{JSON.stringify(props)}</main>
            <Footer />
        </>
    )
}
