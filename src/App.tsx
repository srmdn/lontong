import { motion, useReducedMotion } from 'framer-motion'
import { ThemeToggle } from './components/ThemeToggle'
import { Hero } from './components/Hero'
import { DashboardMockup } from './components/DashboardMockup'
import { ComparisonTable } from './components/ComparisonTable'
import { CliTerminal } from './components/CliTerminal'
import { AnimatedFavicon } from './components/AnimatedFavicon'

function SectionWrapper({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion()
  if (shouldReduce) return <>{children}</>

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <main
      role="main"
      className="relative min-h-screen bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-400"
    >
      <AnimatedFavicon />
      <ThemeToggle />

      {/* Hero — full bleed, no padding wrapper */}
      <Hero />

      {/* Dashboard — dark surface shift */}
      <section className="bg-surface-dark dark:bg-[#08080B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionWrapper delay={0.1}>
            <DashboardMockup />
          </SectionWrapper>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-surface-light dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionWrapper delay={0.1}>
            <ComparisonTable />
          </SectionWrapper>
        </div>
      </section>

      {/* CLI — back to dark */}
      <section className="bg-[#08080B] dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionWrapper delay={0.1}>
            <CliTerminal />
          </SectionWrapper>
        </div>
      </section>
    </main>
  )
}