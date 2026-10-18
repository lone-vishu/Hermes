import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'

export default function Topbar() {
  const inputRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed top-0 left-64 right-0 h-14 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] z-40 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-status-blink" />
          <span className="font-mono text-[10px] tracking-wider uppercase text-slate-600 font-medium">Simulated Environment — Synthetic Data</span>
        </div>
        <div className="hidden xl:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-md px-3 py-1 w-80 focus-within:border-teal-600 focus-within:bg-white transition-all">
          <Icon name="search" className="text-slate-400 text-[16px]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search assets, CVEs, PLCs, IP addresses..."
            className="bg-transparent border-0 outline-none text-xs text-slate-800 placeholder:text-slate-400 w-full focus:ring-0 p-0"
          />
          <kbd className="font-mono text-[10px] text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">⌘K</kbd>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button type="button" aria-label="Notifications" className="relative p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
          <Icon name="notifications" className="text-[19px]" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
        </button>
        <div className="h-4 w-px bg-slate-200" />
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-teal-700 text-white flex items-center justify-center font-mono text-[11px] font-medium border border-teal-800/20">AV</div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-medium text-slate-900 leading-none">Alex Vance</span>
            <span className="font-mono text-[10px] text-slate-400 mt-0.5 leading-none">Lead SecOps (L2 OT)</span>
          </div>
        </div>
      </div>
    </header>
  )
}
