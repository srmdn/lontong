import { useState } from 'react'
import { INSTALL_COMMAND } from '../data'

const PRECHECKS = [
  'Gunakan staging VPS terlebih dahulu',
  'Siapkan domain test dan akses root',
  'Snapshot server sebelum migrasi',
  'Catat rollback plan sebelum cutover',
]

export function CliTerminal() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = INSTALL_COMMAND
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="try" className="py-28 sm:py-36">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-text-dark">
            Verifikasi cepat di staging VPS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-dark/60 max-w-3xl mx-auto">
            Jalankan instalasi di environment test, validasi workflow, lalu putuskan kesiapan untuk migrasi production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 items-start">
          <div className="relative rounded-lg border border-white/[0.08] bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/20">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[11px] text-text-dark/40 font-mono tracking-wider">terminal · lontong</span>
            </div>
            <div className="px-4 py-4">
              <pre className="text-green-400/90 text-sm sm:text-base overflow-x-auto">
                <code>$ {INSTALL_COMMAND}</code>
              </pre>
            </div>
            <button
              onClick={handleCopy}
              aria-label="Copy install command"
              className="absolute top-4 right-4 rounded-md bg-deep-red/90 hover:bg-deep-red text-white text-xs px-3.5 py-1.5 tracking-wide uppercase font-medium transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <aside className="rounded-lg border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-5">
            <h3 className="text-sm uppercase tracking-[0.08em] font-semibold text-deep-red">Preflight checklist</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-dark/70">
              {PRECHECKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <a
                href="https://github.com/srmdn/lontong"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-white/[0.2] px-4 py-2 text-xs uppercase tracking-[0.08em] text-text-dark hover:bg-white/[0.06] transition-colors"
              >
                Open repository
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
