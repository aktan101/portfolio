"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <main className="min-h-screen">
                    <Header />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </main>
            )}
        </>
    )
}

export default App
