"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import LyricsScreen from "@/components/LyricsScreen";
import Music from "@/components/Music";
import OutroScreen from "@/components/OutroScreen";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("first")
  const [musicStarted, setMusicStarted] = useState(false)

  const handleReplay = () => {
    setMusicStarted(false)
    setCurrentScreen("first")
  }

  const screens = {
    first: <FirstScreen onNext={() => setCurrentScreen("second")} />,
    second: <SecondScreen onNext={() => {
      setMusicStarted(true)
      setCurrentScreen("lyrics")
    }} />,
    lyrics: <LyricsScreen onComplete={() => setCurrentScreen("outro")} />,
    outro: <OutroScreen onReplay={handleReplay} />,
  }

  return (
    <div className="flex min-h-dvh items-center justify-center relative px-4 py-8 overflow-hidden">
      <Background />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full flex justify-center"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {musicStarted && <Music shouldPlay={musicStarted} />}

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/30 pointer-events-none z-50 font-light">
        Tomar Honey😩
      </motion.div>

      {/* Credit — @the.dev.adi */}
      <motion.a
        href="https://instagram.com/the.dev.adi"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-light tracking-wide text-white/45 backdrop-blur-md transition-colors hover:border-primary/40 hover:text-white/85 hover:bg-white/[0.08]"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_8px_rgba(155,77,255,0.8)]" />
        @the.dev.adi
      </motion.a>
    </div>
  );
}
