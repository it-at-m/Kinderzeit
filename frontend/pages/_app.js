import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
