import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="w-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
