import { WORKFLOW_ITEMS } from '../data'

export function DashboardMockup() {
  return (
    <section className="py-28 sm:py-36" aria-label="Core workflow">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.18em] uppercase text-text-dark/45 font-medium mb-4">
            Core Workflows
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-text-dark">
            Alur yang harus cepat untuk operator
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-text-dark/60">
            Fokus pada tugas berulang yang biasanya menyita waktu di panel lama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORKFLOW_ITEMS.map((item) => (
            <article
              key={item.task}
              role="status"
              aria-label={`${item.task}: ${item.eta}`}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-text-dark">{item.task}</h3>
                <span className="rounded-sm bg-deep-red/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] font-semibold text-white">
                  {item.eta}
                </span>
              </div>
              <p className="mt-3 text-sm text-text-dark/70">{item.goal}</p>
              <div className="mt-5 h-2 w-full rounded-full bg-white/[0.08] overflow-hidden">
                <div className="h-full rounded-full bg-deep-red/85 w-[72%]" />
              </div>
              <p className="mt-3 text-xs text-text-dark/45">{item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
