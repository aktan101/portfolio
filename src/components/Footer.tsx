"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Github, Mail, MessageSquare } from "lucide-react"

export default function Footer() {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, url: "https://github.com/aktan" },
        { icon: <MessageSquare className="h-5 w-5" />, url: "https://t.me/aktan" },
        { icon: <Mail className="h-5 w-5" />, url: "mailto:aktan@example.com" },
    ]

    return (
        <footer className="py-8 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 md:mb-0"
                    >
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Aktan. {t("footer.rights")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex space-x-4"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}
