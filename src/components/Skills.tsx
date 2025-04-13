"use client"

import { useTranslation } from "react-i18next"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { skillsData } from "../data/skills"

export default function Skills() {
    const { t } = useTranslation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
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

    return (
        <section id="skills" className="py-20 bg-gray-950">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-500 text-transparent bg-clip-text">
              {t("skills.title")}
            </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        {t("skills.description")}
                    </motion.p>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
                    >
                        {skillsData.map((skill) => (
                            <motion.div key={skill.name} variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }} className="group">
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center h-full border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="text-4xl mb-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </h3>

                                        <div className="mt-3 w-full">
                                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1 text-center">{skill.level}%</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
