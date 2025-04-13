"use client"

import type React from "react"

import { useTranslation } from "react-i18next"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Mail, Send, MessageSquare } from "lucide-react"

export default function Contact() {
    const { t } = useTranslation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate EmailJS submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)

        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
    }

    const socialLinks = [
        {
            icon: <Github className="h-5 w-5" />,
            label: "GitHub",
            url: "https://github.com/aktan101",
        },
        {
            icon: <MessageSquare className="h-5 w-5" />,
            label: "Telegram",
            url: "https://t.me/ka1zo_x",
        },
        {
            icon: <Mail className="h-5 w-5" />,
            label: "Email",
            url: "mailto:aktan@example.com",
        },
    ]

    return (
        <section id="contact" className="py-20 bg-gray-950">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-emerald-500 text-transparent bg-clip-text">
              {t("contact.title")}
            </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        {t("contact.description")}
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <motion.div variants={itemVariants} className="lg:col-span-3">
                            <div className="card" style={{ borderRadius: "0.75rem" }}>
                                <div className="p-6">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                                {t("contact.form.name")}
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                required
                                                className="input bg-gray-700 border-gray-600 text-white"
                                                style={{ borderRadius: "0.5rem" }}
                                                placeholder={t("contact.form.namePlaceholder")}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                                {t("contact.form.email")}
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="input bg-gray-700 border-gray-600 text-white"
                                                style={{ borderRadius: "0.5rem" }}
                                                placeholder={t("contact.form.emailPlaceholder")}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                                {t("contact.form.message")}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                className="textarea bg-gray-700 border-gray-600 text-white resize-none"
                                                style={{ borderRadius: "0.5rem" }}
                                                placeholder={t("contact.form.messagePlaceholder")}
                                            />
                                        </div>
                                        <motion.button
                                            type="submit"
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
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg
                                                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    {t("contact.form.sending")}
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    {t("contact.form.send")}
                                                </>
                                            )}
                                        </motion.button>
                                        {isSuccess && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-3 bg-green-900/50 border border-green-500 text-green-200 success-message"
                                                style={{ borderRadius: "0.75rem" }}
                                            >
                                                {t("contact.form.success")}
                                            </motion.div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="card h-full" style={{ borderRadius: "0.75rem" }}>
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-semibold text-white mb-6">{t("contact.getInTouch")}</h3>
                                    <p className="text-gray-300 mb-8">{t("contact.reachOut")}</p>

                                    <div className="space-y-4 mt-auto">
                                        {socialLinks.map((link) => (
                                            <motion.a
                                                key={link.label}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center p-3 bg-gray-700/50 hover:bg-gray-700 social-link transition-colors duration-300"
                                                style={{ borderRadius: "0.75rem" }}
                                                whileHover={{ x: 5, backgroundColor: "rgba(75, 85, 99, 0.7)" }}
                                            >
                                                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                                                    {link.icon}
                                                </div>
                                                <span className="text-gray-200">{link.label}</span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
