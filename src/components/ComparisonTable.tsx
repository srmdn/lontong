import { COMPARISON_DATA } from '../data'

export function ComparisonTable() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-center mb-14 text-text-light dark:text-text-dark">
          Perbandingan Control Panel
        </h2>
        <div className="overflow-x-auto rounded-lg border border-white/[0.06] bg-white/[0.02] dark:bg-white/[0.02]">
          <table className="w-full min-w-[600px] text-left">
            <caption className="sr-only">Perbandingan fitur Lontong dengan control panel lainnya</caption>
            <thead>
              <tr className="bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm">
                <th scope="col" className="px-6 py-4 font-semibold text-text-light dark:text-text-dark">Fitur</th>
                <th scope="col" className="px-6 py-4 font-semibold text-muted-light dark:text-muted-dark">cPanel (Legacy)</th>
                <th scope="col" className="px-6 py-4 font-semibold text-muted-light dark:text-muted-dark">Control Panel Lain</th>
                <th scope="col" className="px-6 py-4 font-semibold text-deep-red bg-deep-red/[0.06]">Lontong (LPanel)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row) => (
                <tr key={row.feature} className="border-t border-white/[0.06]">
                  <th scope="row" className="px-6 py-4 font-medium text-text-light dark:text-text-dark">{row.feature}</th>
                  <td className="px-6 py-4 text-muted-light dark:text-muted-dark text-sm">{row.cpanel}</td>
                  <td className="px-6 py-4 text-muted-light dark:text-muted-dark text-sm">{row.other}</td>
                  <td className="px-6 py-4 text-deep-red font-semibold bg-deep-red/[0.06]">{row.lontong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}