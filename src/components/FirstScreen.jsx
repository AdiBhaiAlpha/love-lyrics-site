"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FirstScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8 } }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center will-change-transform"
            >
                <motion.div
                    className="mb-10 w-32 h-32 rounded-full border border-primary/20 relative flex items-center justify-center"
                >
                    <motion.div
                        className="absolute inset-2 rounded-full bg-linear-to-br from-primary/30 to-secondary/10 backdrop-blur-md"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }}
                    />
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Heart className="w-16 h-16 text-primary fill-current drop-shadow-[0_0_18px_rgba(155,77,255,0.55)]" />
                    </motion.div>
                </motion.div>

                {/* heading */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-primary/90 backdrop-blur-sm"
                >
                    <Heart size={12} className="fill-current" />
                    With love
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-6xl text-center mb-6 max-w-3xl text-balance leading-[1.05] text-foreground font-semibold tracking-tight"
                >
                    I made something
                    <span className="block bg-gradient-to-r from-primary via-fuchsia-400 to-secondary bg-clip-text text-transparent pb-1">for you</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg text-foreground/70 text-center max-w-md mb-10 font-light leading-relaxed"
                >
                    Something small... but straight from the heart :)
                </motion.p>

                {/* button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <button
                        onClick={onNext}
                        className="group px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-lg transition-all duration-300 shadow-[0_8px_40px_rgba(155,77,255,0.35)] hover:shadow-[0_8px_50px_rgba(155,77,255,0.55)] hover:from-primary/90 hover:to-secondary/90 flex items-center gap-2 font-medium"
                    >
                        Open it <Heart size={20} className="mb-0.5 fill-white transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    </button>
                    <p className="mt-4 text-center text-xs text-white/30 tracking-wide">tap to begin ✦</p>
                </motion.div>
            </motion.div>
        </div>
    )
}
