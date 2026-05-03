import { useState } from 'react'
import { INSTALL_COMMAND } from '../data'

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
    <section className="py-28 sm:py-36">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-center mb-12 text-text-dark">
          Instalasi Satu Baris
        </h2>
        <div className="relative max-w-2xl mx-auto rounded-lg border border-white/[0.08] bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[11px] text-text-dark/40 font-mono tracking-wider">terminal — lontong</span>
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
      </div>
    </section>
  )
}