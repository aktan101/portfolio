"use client"

import { useTranslation } from "react-i18next"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, GraduationCap, Heart, Coffee, Lightbulb } from "lucide-react"

export default function About() {
    const { t } = useTranslation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const facts = [
        { icon: <Code className="h-6 w-6 text-purple-500" />, key: "coding" },
        { icon: <GraduationCap className="h-6 w-6 text-blue-500" />, key: "education" },
        { icon: <Heart className="h-6 w-6 text-red-500" />, key: "passion" },
        { icon: <Coffee className="h-6 w-6 text-amber-500" />, key: "coffee" },
        { icon: <Lightbulb className="h-6 w-6 text-yellow-500" />, key: "learning" },
    ]

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              {t("about.title")}
            </span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants} className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-30 blur-xl"></div>
                            <div className="relative aspect-square overflow-hidden rounded-xl">
                                <img src="/placeholder.svg?height=500&width=500" alt="Aktan" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white">
                                {t("about.hello")}
                            </motion.h3>

                            <motion.p variants={itemVariants} className="text-gray-300">
                                {t("about.bio1")}
                            </motion.p>

                            <motion.p variants={itemVariants} className="text-gray-300">
                                {t("about.bio2")}
                            </motion.p>

                            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                                {facts.map((fact) => (
                                    <motion.div key={fact.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <div className="card p-4 flex flex-col items-center text-center">
                                            <div className="mb-3 mt-2">{fact.icon}</div>
                                            <h4 className="font-medium text-white">{t(`about.facts.${fact.key}.title`)}</h4>
                                            <p className="text-sm text-gray-400 mt-1">{t(`about.facts.${fact.key}.description`)}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
