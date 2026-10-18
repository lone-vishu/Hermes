import { useMemo, useState } from 'react'
import clsx from 'clsx'
import Icon from '../components/Icon.jsx'
import { KPIS, LEDGER, STATUS_STYLES } from '../data/ledger.js'

const FILTERS = [
  { key: 'all', label: 'All Actions', count: '8', countClass: 'text-slate-500' },
  { key: 'awaiting', label: 'Awaiting Approval', count: '2', countClass: 'px-1 rounded bg-amber-100 text-amber-800 font-semibold' },
  { key: 'approved', label: 'Approved', count: '1', countClass: 'px-1 rounded bg-teal-100 text-teal-800 font-semibold' },
  { key: 'executed', label: 'Executed', count: '4', countClass: 'text-slate-500' },
  { key: 'failed', label: 'Failed / Blocked', count: '1', countClass: 'text-rose-500' },
]

const HEADERS = ['Execution ID', 'Action Description', 'Target Asset', 'Initiating Ref', 'Authorized By', 'Status', 'Timestamp', 'Telemetry Verification']

function exportCsv(rows) {
  const head = ['Execution ID', 'Action', 'Asset', 'Ref', 'Authorized By', 'Status', 'Timestamp', 'Verification']
  const body = rows.map((r) => [
    r.id, r.description, r.asset, r.ref,
    r.approver ? `${r.approver.name} (${r.approver.role})` : 'SYSTEM AUTOMATED',
    STATUS_STYLES[r.status].label, r.time, r.verification.text,
  ])
  const csv = [head, ...body].map((l) => l.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  const a = Object.assign(document.createElement('a'), { href: url, download: 'defensive-action-ledger.csv' })
  a.click()
  URL.revokeObjectURL(url)
}

export default function Response() {
  const [filter, setFilter] = useState('all')

  const rows = useMemo(() => {
    if (filter === 'all') return LEDGER
    if (filter === 'executed') return LEDGER.filter((r) => r.status !== 'failed')
    if (filter === 'failed') return LEDGER.filter((r) => r.status === 'failed')
    return []
  }, [filter])

  return (
    <div className="flex-1 bg-[#fafbfc]">
    <div className="p-8 max-w-[1600px] mx-auto w-full flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 pb-2 border-b border-slate-200/80">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-semibold tracking-wider text-teal-800 uppercase bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                Defensive Mitigation Governance
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                Dual-Custody Audit Active
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Response Recommendations</h1>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
              Operational defensive action validation and human-in-the-loop change governance. Multi-role quorum authorization required before dispatching commands across OT boundary gateways.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-100/90 border border-slate-200 p-1 rounded-lg">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={clsx(
                  'px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors',
                  filter === f.key
                    ? 'bg-white text-slate-900 shadow-2xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                )}
              >
                {f.label} <span className={clsx('ml-1 font-mono text-[10px]', f.countClass)}>{f.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <Icon name="warning" className="text-[17px]" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-0.5">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-amber-900 uppercase">Demo Safety Constraint:</span>
              <span className="text-xs text-amber-900/80">
                All defensive mitigations require formal operator authorization. No destructive automated shutdowns are permitted on active Level 1 OT equipment.
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center font-mono text-[10px] font-medium text-amber-800 bg-white/90 border border-amber-200 px-2.5 py-1 rounded-md shadow-2xs">
            ISA/IEC 62443-4-2
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Icon name="history_toggle_off" className="text-slate-400 text-[18px]" />
            <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Defensive Action Execution Ledger</h2>
            <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">IMMUTABLE LOG</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => exportCsv(rows)}
              className="flex items-center gap-1 font-mono text-[11px] text-slate-600 hover:text-slate-900 transition-colors bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs"
            >
              <Icon name="download" className="text-[14px]" />
              <span>Export CSV</span>
            </button>
            <div className="w-px h-3 bg-slate-200" />
            <span className="font-mono text-[10px] text-slate-400">SHIFT: 08:00 - PRESENT</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                  {HEADERS.map((h) => (
                    <th key={h} className="py-2.5 px-4 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={HEADERS.length} className="py-10 text-center font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      No ledger entries for this filter
                    </td>
                  </tr>
                )}
                {rows.map((r) => {
                  const s = STATUS_STYLES[r.status]
                  return (
                    <tr key={r.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 font-mono font-medium text-[#00685f] whitespace-nowrap">{r.id}</td>
                      <td className="py-3 px-4 font-medium text-slate-900">{r.description}</td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="font-mono text-[11px] text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{r.asset}</span>
                      </td>
                      <td className={clsx('py-3 px-4 font-mono text-[11px] whitespace-nowrap', r.refTone)}>{r.ref}</td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        {r.approver ? (
                          <>
                            {r.approver.name} <span className="font-mono text-[10px] text-slate-400">({r.approver.role})</span>
                          </>
                        ) : (
                          <span className="font-mono text-[10px] text-slate-500 uppercase bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">System Automated</span>
                        )}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className={clsx('inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded border font-medium', s.pill)}>
                          <span className={clsx('w-1.5 h-1.5 rounded-full', s.dot)} />
                          {s.label}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500 whitespace-nowrap">{r.time}</td>
                      <td className={clsx('py-3 px-4 font-mono text-[11px]', r.verification.tone)}>
                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                          <Icon name={r.verification.icon} className={clsx('text-[15px]', r.verification.iconTone)} />
                          <span>{r.verification.text}</span>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8">
        {KPIS.map((k) => (
          <div key={k.label} className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-2xs">
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-medium">{k.label}</span>
              <span className={clsx('text-xl font-bold tracking-tight', k.valueTone || 'text-slate-900')}>{k.value}</span>
              <span className={clsx('font-mono text-[10px]', k.subTone)}>{k.sub}</span>
            </div>
            <div className={clsx('w-9 h-9 rounded-lg border flex items-center justify-center', k.box)}>
              <Icon name={k.icon} className="text-[20px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
