"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSwitcher from "./LanguageSwitcher"
import { Menu, X } from "lucide-react"

export default function Header() {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled ? "bg-gray-950/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
                    <span className="text-purple-500">A</span>ktan
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {["about", "skills", "projects", "contact"].map((item) => (
                            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <button
                                    onClick={() => scrollToSection(item)}
                                    className="text-gray-300 hover:text-purple-500 transition-colors"
                                >
                                    {t(`nav.${item}`)}
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                    <LanguageSwitcher />
                </nav>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden flex items-center">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-4 text-gray-300 hover:text-purple-500 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-30 bg-gray-950/95 pt-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="container mx-auto px-4">
                            <ul className="flex flex-col space-y-6 items-center">
                                {["about", "skills", "projects", "contact"].map((item) => (
                                    <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-full">
                                        <button
                                            onClick={() => scrollToSection(item)}
                                            className="text-xl text-gray-300 hover:text-purple-500 transition-colors w-full text-center py-2"
                                        >
                                            {t(`nav.${item}`)}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
