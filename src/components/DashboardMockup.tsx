import { useState, useEffect, useRef } from 'react'
import { DASHBOARD_STATS } from '../data'

function AnimatedCounter({ value, unit }: { value: number; unit: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1000
          const steps = 30
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count}{unit}</span>
}

export function DashboardMockup() {
  return (
    <section className="py-28 sm:py-36" aria-label="Dashboard mockup">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-center mb-12 text-text-dark">
          Dashboard Ringan &amp; Informatif
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DASHBOARD_STATS.map((stat) => (
            <div
              key={stat.label}
              role="status"
              aria-label={`${stat.label}: ${stat.value}${stat.unit}`}
              className="rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-7 hover:bg-white/[0.05] transition-colors duration-300"
            >
              <div className="text-sm text-text-dark/50 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-text-dark mb-4">
                <AnimatedCounter value={stat.value} unit={stat.unit} />
              </div>
              <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(stat.value / stat.max) * 100}%`,
                    backgroundColor: stat.color,
                  }}
                />
              </div>
              <div className="text-xs text-text-dark/40 mt-1 text-right">
                {stat.value}{stat.unit} / {stat.max}{stat.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}