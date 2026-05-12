import { COMPARISON_DATA, MIGRATION_SCOPE } from '../data'

function barWidth(panel: 'cpanel' | 'other' | 'lontong'): number {
  switch (panel) {
    case 'lontong':
      return 100
    case 'other':
      return 62
    case 'cpanel':
      return 38
  }
}

const panelLabel: Record<'lontong' | 'other' | 'cpanel', string> = {
  lontong: 'Lontong',
  other: 'Panel Lain',
  cpanel: 'cPanel',
}

export function ComparisonTable() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.18em] uppercase text-muted-light dark:text-text-dark/40 font-medium mb-4">
            Benchmark and Migration
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-text-light dark:text-text-dark">
            Bukti performa dan batas kompatibilitas
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-muted-light dark:text-text-dark/60">
            Angka ini untuk validasi awal. Tetap uji dengan beban riil workload Anda sebelum production.
          </p>
        </div>

        <div className="space-y-10">
          {COMPARISON_DATA.map((row) => (
            <div key={row.feature}>
              <h3 className="text-sm font-semibold tracking-[-0.01em] text-text-light dark:text-text-dark/80 mb-4">
                {row.feature}
              </h3>

              <div className="space-y-2">
                {(['lontong', 'other', 'cpanel'] as const).map((panel) => {
                  const value = row[panel]
                  const width = barWidth(panel)
                  const isLontong = panel === 'lontong'

                  return (
                    <div key={panel} className="flex items-center gap-3">
                      <div className="w-20 sm:w-24 flex-shrink-0 text-right">
                        <span
                          className={`text-[11px] font-medium tracking-[0.04em] uppercase ${
                            isLontong ? 'text-deep-red' : 'text-muted-light dark:text-text-dark/30'
                          }`}
                        >
                          {panelLabel[panel]}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="h-8 rounded-sm relative overflow-hidden bg-border-light/30 dark:bg-white/[0.03]">
                          <div
                            className={`absolute inset-y-0 left-0 rounded-sm ${
                              isLontong
                                ? 'bg-deep-red/90'
                                : panel === 'cpanel'
                                  ? 'bg-border-light dark:bg-white/[0.06]'
                                  : 'bg-border-light/70 dark:bg-white/[0.10]'
                            }`}
                            style={{ width: `${width}%` }}
                          >
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-medium whitespace-nowrap ${
                                isLontong ? 'text-white' : 'text-muted-light dark:text-text-dark/45'
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

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {MIGRATION_SCOPE.map((bucket) => (
            <article
              key={bucket.title}
              className="rounded-lg border border-border-light/40 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] p-5"
            >
              <h3 className="text-sm uppercase tracking-[0.08em] font-semibold text-deep-red">{bucket.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-light dark:text-text-dark/70">
                {bucket.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
