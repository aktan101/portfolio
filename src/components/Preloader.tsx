"use client"

import { motion } from "framer-motion"

export default function Preloader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-24 h-24 border-t-4 border-purple-500 border-solid rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.p
                    className="mt-4 text-xl font-semibold text-purple-500"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                    Aktan
                </motion.p>
            </motion.div>
        </motion.div>
    )
}
