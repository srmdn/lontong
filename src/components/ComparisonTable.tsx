import { COMPARISON_DATA } from '../data'

function barWidth(panel: 'cpanel' | 'other' | 'lontong'): number {
  switch (panel) {
    case 'lontong': return 100
    case 'other': return 55
    case 'cpanel': return 30
  }
}

const panelLabel: Record<string, string> = {
  lontong: 'Lontong',
  other: 'Panel Lain',
  cpanel: 'cPanel',
}

export function ComparisonTable() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.18em] uppercase text-muted-light dark:text-text-dark/40 font-medium mb-4">
            Comparison
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-text-light dark:text-text-dark">
            What you get with Lontong
          </h2>
        </div>

        <div className="space-y-10">
          {COMPARISON_DATA.map((row) => (
            <div key={row.feature}>
              <div className="mb-4">
                <h3 className="text-sm font-semibold tracking-[-0.01em] text-text-light dark:text-text-dark/80">
                  {row.feature}
                </h3>
              </div>

              <div className="space-y-2">
                {(['lontong', 'other', 'cpanel'] as const).map((panel) => {
                  const value = row[panel]
                  const width = barWidth(panel)
                  const isLontong = panel === 'lontong'

                  return (
                    <div key={panel} className="flex items-center gap-3">
                      {/* Panel label */}
                      <div className="w-20 sm:w-24 flex-shrink-0 text-right">
                        <span
                          className={`text-[11px] font-medium tracking-[0.04em] uppercase ${
                            isLontong
                              ? 'text-deep-red'
                              : 'text-muted-light dark:text-text-dark/25'
                          }`}
                        >
                          {panelLabel[panel]}
                        </span>
                      </div>

                      {/* Bar */}
                      <div className="flex-1">
                        <div className="h-8 rounded-sm relative overflow-hidden bg-border-light/30 dark:bg-white/[0.03]">
                          {/* Fill */}
                          <div
                            className={`absolute inset-y-0 left-0 rounded-sm transition-all duration-700 ease-out ${
                              isLontong
                                ? 'bg-deep-red/90'
                                : panel === 'cpanel'
                                  ? 'bg-border-light dark:bg-white/[0.06]'
                                  : 'bg-border-light/70 dark:bg-white/[0.10]'
                            }`}
                            style={{ width: `${width}%` }}
                          >
                            {/* Value text */}
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-medium whitespace-nowrap ${
                                isLontong
                                  ? 'text-white'
                                  : 'text-muted-light dark:text-text-dark/40'
                              }`}
                            >
                              {value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 border-t border-border-light/30 dark:border-white/[0.04]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}