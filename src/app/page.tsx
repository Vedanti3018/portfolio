'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 space-y-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-44 h-44 md:w-56 md:h-56 shadow-xl"
      >
          <Image
            src="/Emoji.png"
            alt="Vedanti Avatar"
            width={224}
            height={224}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 0.9 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl md:text-3xl font-light text-white"
        >
          Hi, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Vedanti Saxena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl px-4"
        >
          Associate AI Engineer passionate about building intelligent, creative systems that feel both human and elegant.
        </motion.p>
  
      </section>

      {/* About Me Section (like a second screen) */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#121212] border border-gray-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl w-full"
        >
          {/* Text */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl">
              I’m Vedanti, an Associate AI Engineer with a love for emotionally-intelligent and elegant systems.
              I blend deep tech and UX to create solutions people actually enjoy using.
            </p>
          </div>

          {/* Image */}
          <div className="w-28 h-28 md:w-36 md:h-36 shrink-0">
            <Image
              src="/Emoji_1.png"
              alt="Vedanti"
              width={144}
              height={144}
              className="w-full h-full object-contain mix-blend-lighten"
            />
          </div>
        </motion.div>
      </section>
    </main>
  )
}