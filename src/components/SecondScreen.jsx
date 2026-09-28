"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center will-change-transform"
            >
                <motion.div
                    className="mb-10 w-32 h-32 rounded-full border border-secondary/20 relative flex items-center justify-center"
                >
                    <motion.div
                        className="absolute inset-2 rounded-full bg-linear-to-br from-secondary/30 to-primary/10 backdrop-blur-md"
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
                        <Heart className="w-16 h-16 text-secondary fill-current drop-shadow-[0_0_18px_rgba(192,38,211,0.55)]" />
                    </motion.div>
                </motion.div>

                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-5 text-xs tracking-[0.25em] uppercase text-secondary/80"
                >
                    Turn the volume up 🎧
                </motion.p>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl text-center mb-4 max-w-3xl text-foreground leading-[1.1] font-semibold tracking-tight text-balance"
                >
                    Something I wanted to{" "}
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">share</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-foreground/60 text-center max-w-sm mb-10 font-light leading-relaxed"
                >
                    Best experienced with sound on and heart open.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <button
                        onClick={onNext}
                        className="group px-10 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-lg transition-all duration-300 shadow-[0_8px_40px_rgba(192,38,211,0.35)] hover:shadow-[0_8px_50px_rgba(192,38,211,0.55)] hover:from-secondary/90 hover:to-primary/90 flex items-center gap-2 font-medium"
                    >
                        Show me
                        <Heart size={20} className="mb-0.5 fill-white transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
