import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="w-screen">
            <Navbar />
            <main className="w-screen max-w-6xl m-auto flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    )
}
