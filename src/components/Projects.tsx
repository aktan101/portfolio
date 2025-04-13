"use client"

import { useTranslation } from "react-i18next"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { projectsData } from "../data/projects"

export default function Projects() {
    const { t } = useTranslation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

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

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-purple-500 text-transparent bg-clip-text">
              {t("projects.title")}
            </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        {t("projects.description")}
                    </motion.p>

                    <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -10 }} className="h-full">
                                <div className="card h-full flex flex-col" style={{ borderRadius: "0.75rem" }}>
                                    <div
                                        className="relative aspect-video overflow-hidden"
                                        style={{ borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem" }}
                                    >
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-semibold text-white mb-2">{t(`projects.items.${project.id}.title`)}</h3>
                                        <p className="text-gray-300 mb-4">{t(`projects.items.${project.id}.description`)}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300"
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <motion.button
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                                            style={{
                                                borderRadius: "0.5rem",
                                                padding: "0.75rem 1rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1rem",
                                                fontWeight: "500",
                                                transition: "all 0.3s ease",
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => window.open(project.url, "_blank")}
                                        >
                                            <ExternalLink className="mr-2 h-5 w-5" />
                                            {t("projects.viewProject")}
                                        </motion.button>
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
