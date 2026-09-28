"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"

const lyrics = [
    { text: "When all I dream of is your eyes", duration: 4800, anim: 2.5 },
    { text: "All I long for is your touch", duration: 3800, anim: 1.5 },
    { text: "And, darlin', something tells me that's enough", duration: 6300, anim: 2.2 },
    { text: "You can say that I'm a fool", duration: 3600, anim: 1.8 },
    { text: "And I don't know very much", duration: 3400, anim: 1.8 },
    { text: "But I think they call this love", duration: 6000, anim: 2.2 },
]


export default function LyricsScreen({ onComplete }) {
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(true)
    const onCompleteRef = useRef(onComplete)

    useEffect(() => {
        onCompleteRef.current = onComplete
    }, [onComplete])

    useEffect(() => {
        if (!isAnimating) return

        const currentDuration = lyrics[currentLyricIndex].duration

        const timer = setTimeout(() => {
            if (currentLyricIndex < lyrics.length - 1) {
                setCurrentLyricIndex(prev => prev + 1)
            } else {
                setIsAnimating(false)
                onCompleteRef.current?.()

            }
        }, currentDuration)

        return () => clearTimeout(timer)
    }, [isAnimating, currentLyricIndex])


    return (
        <div className="w-full max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center relative px-2">
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-8" aria-hidden="true">
                {lyrics.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i < currentLyricIndex
                            ? "w-6 bg-primary/70"
                            : i === currentLyricIndex
                                ? "w-10 bg-gradient-to-r from-primary to-secondary shadow-[0_0_12px_rgba(155,77,255,0.6)]"
                                : "w-4 bg-white/15"
                            }`}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                {isAnimating && currentLyricIndex < lyrics.length && (
                    <motion.div
                        key={currentLyricIndex}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-center"
                    >
                        {currentLyricIndex === 0 ? (
                            <div className="flex flex-wrap justify-center items-center gap-x-3">
                                <TextAnimate
                                    by="word"
                                    duration={2.4}
                                    animation="blurInUp"
                                    className="text-3xl md:text-5xl lg:text-6xl text-foreground drop-shadow-[0_0_10px_rgba(155,77,255,0.35)] will-change-transform"
                                >
                                    When
                                </TextAnimate>

                                <TextAnimate
                                    by="word"
                                    duration={2.2}
                                    delay={1.8}
                                    animation="blurInUp"
                                    className="text-3xl md:text-5xl lg:text-6xl text-foreground drop-shadow-[0_0_10px_rgba(155,77,255,0.35)] text-balance leading-normal will-change-transform"
                                >
                                    all I dream of is your eyes
                                </TextAnimate>
                            </div>
                        ) : (
                            <TextAnimate
                                by="word"
                                duration={lyrics[currentLyricIndex].anim}
                                animation="blurInUp"
                                className="text-3xl md:text-5xl lg:text-6xl text-foreground drop-shadow-[0_0_10px_rgba(155,77,255,0.35)] text-balance leading-normal will-change-transform"
                            >
                                {lyrics[currentLyricIndex].text}
                            </TextAnimate>
                        )}

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lyric counter */}
            <p className="mt-8 text-xs tracking-[0.25em] uppercase text-white/35 font-light">
                {String(currentLyricIndex + 1).padStart(2, "0")} — {String(lyrics.length).padStart(2, "0")}
            </p>
        </div>
    )
}
