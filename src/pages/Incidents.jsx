import { useMemo, useState } from 'react'
import clsx from 'clsx'
import Icon from '../components/Icon.jsx'
import { INCIDENTS, INC_SEV, INC_STATUS } from '../data/incidents.js'

export default function Incidents() {
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return INCIDENTS
    return INCIDENTS.filter((i) =>
      [i.id, i.title, i.source, i.scope, i.assets, i.analyst].some((v) => v.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div className="flex-1 bg-[#fafafa] pb-12">
      <div className="px-6 py-6 flex flex-col gap-5 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
              <span>Incidents</span>
              <span>/</span>
              <span className="text-teal-700 font-semibold">All Active</span>
            </div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">Incident Management</h1>
            <p className="text-xs text-slate-500 mt-0.5">Operational telemetry &amp; ICS security event response queue</p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs shadow-2xs">
              <Icon name="search" className="text-slate-400 text-[16px]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Filter incidents by ID, asset..."
                className="bg-transparent border-0 outline-none text-slate-800 placeholder:text-slate-400 w-48 focus:ring-0 p-0 text-xs"
              />
            </div>
            <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium shadow-2xs transition-colors">
              <Icon name="filter_list" className="text-[16px] text-slate-500" />
              <span>Filter</span>
            </button>
            <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium shadow-2xs transition-colors">
              <Icon name="add" className="text-[16px]" />
              <span>New Incident</span>
            </button>
          </div>
        </div>

        <div className="bg-white border border-border rounded-lg shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/70 border-b border-border text-[11px] font-mono uppercase tracking-wider text-slate-500">
                <tr>
                  {['Incident', 'Severity', 'Status', 'Target Scope / Assets', 'Lead Analyst', 'Detected'].map((h) => (
                    <th key={h} className="py-3 px-4 font-semibold">{h}</th>
                  ))}
                  <th className="py-3 px-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                {rows.length === 0 && (
                  <tr><td colSpan={7} className="py-10 text-center font-mono text-[11px] uppercase tracking-wider text-slate-400">No incidents match this filter</td></tr>
                )}
                {rows.map((i) => {
                  const sev = INC_SEV[i.sev]
                  return (
                    <tr key={i.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-teal-800 hover:underline cursor-pointer">{i.id}</span>
                            <span className="font-semibold text-slate-900">{i.title}</span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-mono">{i.source}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className={clsx('inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded border', sev.cls)}>
                          <span className={clsx('w-1.5 h-1.5 rounded-full', sev.dot)} /> {sev.label}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className={clsx('inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded border', INC_STATUS[i.status])}>{i.status}</span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex flex-col gap-0.5 font-mono text-[11px]">
                          <span className="text-slate-800 font-medium">{i.scope}</span>
                          <span className="text-slate-500 text-[10px]">{i.assets}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-700">{i.analyst}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 font-mono text-[11px]">{i.detected}</td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors">
                          <span>View</span>
                          <Icon name="arrow_forward" className="text-[14px]" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-4 py-3 bg-slate-50/60 border-t border-border text-xs text-slate-500">
            <div className="font-mono text-[11px]">
              Showing <span className="text-slate-800 font-semibold">{rows.length}</span> of <span className="text-slate-800 font-semibold">{INCIDENTS.length}</span> incidents
            </div>
            <div className="flex items-center gap-1.5">
              <button type="button" disabled className="px-2.5 py-1 rounded border border-slate-200 text-slate-400 text-xs font-medium cursor-not-allowed bg-white">Previous</button>
              <button type="button" disabled className="px-2.5 py-1 rounded border border-slate-200 text-slate-400 text-xs font-medium cursor-not-allowed bg-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
