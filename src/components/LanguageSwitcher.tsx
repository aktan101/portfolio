"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ru" : "en"
        i18n.changeLanguage(newLang)
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <button
                onClick={toggleLanguage}
                className="btn btn-outline rounded-full px-4 bg-transparent border border-purple-500 hover:bg-purple-900/20 text-white text-sm h-8"
            >
                {i18n.language === "en" ? "RU" : "EN"}
            </button>
        </motion.div>
    )
}
