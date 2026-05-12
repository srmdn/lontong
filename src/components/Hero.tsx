import { motion } from 'framer-motion'
import { PROOF_METRICS, SUBHEADLINE, TAGLINE } from '../data'

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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44 text-center">
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.04em] text-text-dark max-w-5xl mx-auto"
        >
          Alternatif cPanel
          <span className="text-deep-red">,</span> fokus workflow
          <span className="text-deep-red">.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-text-dark/65 font-light tracking-[-0.01em]"
        >
          {TAGLINE} {SUBHEADLINE}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#try"
            className="inline-flex items-center rounded-md bg-deep-red px-5 py-2.5 text-sm font-semibold tracking-[0.04em] uppercase text-white hover:bg-deep-red-light transition-colors"
          >
            Try on Staging VPS
          </a>
          <a
            href="https://github.com/srmdn/lontong"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-text-dark/20 bg-black/20 px-5 py-2.5 text-sm font-semibold tracking-[0.04em] uppercase text-text-dark hover:bg-black/35 transition-colors"
          >
            Read Docs
          </a>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {PROOF_METRICS.map((metric) => (
            <article
              key={metric.label}
              className="rounded-lg border border-white/[0.08] bg-black/25 backdrop-blur-sm px-4 py-4"
            >
              <p className="text-[11px] tracking-[0.08em] uppercase text-text-dark/45">{metric.label}</p>
              <p className="mt-2 text-xl font-semibold text-text-dark">{metric.value}</p>
              <p className="mt-1 text-xs text-text-dark/55">{metric.note}</p>
            </article>
          ))}
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
