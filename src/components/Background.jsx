"use client"

import { memo } from "react"
import { motion } from "framer-motion"

function Background() {
    // Deterministic star positions (no useEffect setState -> lint clean + no hydration mismatch)
    const stars = Array.from({ length: 40 }).map((_, i) => {
        const left = (i * 37.7 + 13) % 100;
        const top = (i * 53.3 + 7) % 100;
        const scale = 0.5 + ((i * 29) % 50) / 100;
        const duration = 2 + ((i * 17) % 30) / 10;
        const delay = ((i * 11) % 20) / 10;
        return { id: i, left, top, scale, duration, delay };
    });

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Base gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)",
                }}
            />
            {/* Soft glow orbs */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
            <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-[130px]" />
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

            {/* Twinkling stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: "2px",
                        height: "2px",
                    }}
                    initial={{ opacity: 0.15, scale: star.scale }}
                    animate={{
                        opacity: [0.12, 0.4, 0.12],
                        scale: [star.scale, star.scale * 1.6, star.scale],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                />
            ))}

            {/* Subtle vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(80% 80% at 50% 50%, transparent 60%, rgba(0,0,0,0.55) 100%)",
                }}
            />
        </div>
    )
}

export default memo(Background)
