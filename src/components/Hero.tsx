import { motion } from 'framer-motion'
import { TAGLINE, SUBHEADLINE } from '../data'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-dark dark:bg-[#060609]">
      {/* Unsplash server-room background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/70 to-surface-dark dark:from-[#060609]/95 dark:via-[#060609]/80 dark:to-[#060609]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48 text-center">
        {/* Micro-label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 inline-flex items-center gap-2.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-deep-red/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-deep-red" />
          </span>
          <span className="text-xs sm:text-sm tracking-[0.15em] uppercase text-text-dark/60 font-medium">
            Open Source
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.04em] text-text-dark"
        >
          {TAGLINE.split('.')[0]}
          <span className="text-deep-red">.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-text-dark/60 font-light tracking-[-0.01em]"
        >
          {SUBHEADLINE}
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text-dark">&lt;100MB</div>
            <div className="mt-1 text-xs tracking-[0.1em] uppercase text-text-dark/40">RAM Usage</div>
          </div>
          <div className="w-px h-12 bg-text-dark/10" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text-dark">Go</div>
            <div className="mt-1 text-xs tracking-[0.1em] uppercase text-text-dark/40">Single Binary</div>
          </div>
          <div className="w-px h-12 bg-text-dark/10" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text-dark">0</div>
            <div className="mt-1 text-xs tracking-[0.1em] uppercase text-text-dark/40">Downtime</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border border-text-dark/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-deep-red"
          />
        </div>
      </motion.div>
    </section>
  )
}