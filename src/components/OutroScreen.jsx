"use client"

import { motion } from "framer-motion"
import { Heart, RotateCcw } from "lucide-react"

export default function OutroScreen({ onReplay }) {
    return (
        <div className="w-full flex flex-col items-center justify-center relative px-4">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6 will-change-transform max-w-lg text-center"
            >
                {/* GIF */}
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 -z-10 blur-3xl bg-primary/25 rounded-full scale-110" aria-hidden="true" />
                    <motion.img
                        src="/gifs/cute.gif"
                        alt="cute teddy"
                        width={200}
                        height={200}
                        className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(155,77,255,0.3)]"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* Outro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="flex items-center gap-2 text-primary">
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
                        <Heart size={16} className="fill-current" />
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
                    </div>
                    <p className="text-2xl md:text-4xl text-foreground text-center text-balance leading-snug font-semibold tracking-tight drop-shadow-[0_0_12px_rgba(155,77,255,0.35)]">
                        This was meant for you ❤️
                    </p>
                    <p className="text-sm md:text-base text-foreground/55 font-light">
                        Made with love, just to make you smile.
                    </p>
                </motion.div>

                {onReplay && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        onClick={onReplay}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <RotateCcw size={16} />
                        Watch it again
                    </motion.button>
                )}

            </motion.div>
        </div>
    )
}
