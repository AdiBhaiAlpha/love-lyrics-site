"use client"

import { useEffect, useRef } from "react"

export default function Music({ shouldPlay }) {
    const audioRef = useRef(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (shouldPlay) {
            audio.volume = 0.8
            audio.play().catch(() => {
                // Autoplay blocked — will play on next user interaction
            })
        }

        return () => {
            audio.pause()
        }
    }, [shouldPlay])

    return (
        <audio ref={audioRef} preload="auto" loop>
            <source src="/audio/bg.mp3" type="audio/mpeg" />
        </audio>
    )
}