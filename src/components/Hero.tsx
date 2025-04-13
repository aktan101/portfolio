"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { ArrowDown, Mail, FolderOpen } from "lucide-react"

export default function Hero() {
    const { t } = useTranslation()

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950" />

                {/* Geometric Shapes */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700/10 blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-6">
                    <motion.h2
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl font-light text-gray-300 mb-2"
                    >
                        {t("hero.greeting")}
                    </motion.h2>
                    <motion.h1
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        <span className="text-white">Aktan</span>
                    </motion.h1>
                    <motion.h2
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 text-transparent bg-clip-text"
                    >
                        {t("hero.profession")}
                    </motion.h2>
                </motion.div>

                <motion.p
                    custom={3}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                >
                    {t("hero.description")}
                </motion.p>

                <motion.div
                    custom={4}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-6 mx-auto"
                >
                    <motion.button
                        className="hero-btn border-blue-500 text-blue-400 bg-blue-500/5"
                        style={{
                            borderRadius: "0.5rem",
                            padding: "0.75rem 1.5rem",
                            border: "1px solid",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1rem",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("contact")}
                    >
                        <Mail className="mr-2 h-5 w-5" />
                        {t("hero.contactMe")}
                    </motion.button>
                    <motion.button
                        className="hero-btn border-emerald-500 text-emerald-400 bg-emerald-500/5"
                        style={{
                            borderRadius: "0.5rem",
                            padding: "0.75rem 1.5rem",
                            border: "1px solid",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1rem",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(16, 185, 129, 0.2)",
                            boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("projects")}
                    >
                        <FolderOpen className="mr-2 h-5 w-5" />
                        {t("hero.myProjects")}
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                        <ArrowDown className="h-8 w-8 text-gray-400" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
