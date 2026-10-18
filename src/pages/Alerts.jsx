import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import Icon from '../components/Icon.jsx'
import { ALERTS, ALERT_SEV, ALERT_STATUS } from '../data/alerts.js'

const SEV_PILLS = [
  { key: 'CRIT', label: 'Critical [2]', dot: 'bg-red-500', cls: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100' },
  { key: 'HIGH', label: 'High [6]', dot: 'bg-amber-500', cls: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100' },
  { key: 'MED', label: 'Medium [7]', dot: 'bg-yellow-500', cls: 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-100' },
  { key: 'LOW', label: 'Low [3]', dot: 'bg-slate-400', cls: 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200/80' },
]

function Drawer({ alert, onClose }) {
  const navigate = useNavigate()

  if (!alert?.hasDetail) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col gap-3 sticky top-20">
        <div className="flex items-start justify-between pb-2 border-b border-slate-100">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">{alert ? `Alert Details: ${alert.id}` : 'Alert Details'}</span>
            {alert && <span className="text-[10px] font-mono text-slate-400 mt-0.5">{alert.first} UTC • {alert.asset}</span>}
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition">
            <Icon name="close" className="text-[16px]" />
          </button>
        </div>
        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide py-6 text-center">
          {alert ? 'No forensic capture for this alert' : 'Select an alert to inspect'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col gap-3.5 sticky top-20">
      <div className="flex items-start justify-between pb-2 border-b border-slate-100">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-red-100/70 text-red-700 border border-red-200">CRITICAL</span>
            <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">TRIAGE ACTIVE</span>
          </div>
          <h2 className="text-sm font-semibold text-slate-900 leading-snug">Alert Details: ALT-8921</h2>
          <span className="text-[10px] font-mono text-slate-400 mt-0.5">14:32:04 UTC • OT SENSOR CLUSTER 04</span>
        </div>
        <button type="button" onClick={onClose} className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition">
          <Icon name="close" className="text-[16px]" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="p-2 rounded-md bg-slate-50 border border-slate-200/80">
          <span className="text-[9px] font-mono text-slate-400 uppercase block font-medium">RULE SIGNATURE</span>
          <span className="font-mono font-semibold text-slate-800 truncate block mt-0.5" title="OT-MODBUS-UNAUTH-WRITE">OT-MODBUS-UNAUTH-WRITE</span>
        </div>
        <div className="p-2 rounded-md bg-slate-50 border border-slate-200/80">
          <span className="text-[9px] font-mono text-slate-400 uppercase block font-medium">TARGET ASSET</span>
          <span className="font-mono font-semibold text-teal-700 truncate block mt-0.5">PLC-LINE-04</span>
        </div>
      </div>

      <div className="p-2.5 rounded-md bg-slate-50 border border-slate-200/80 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="font-semibold text-slate-700 uppercase">FORENSIC CONTEXT</span>
          <span className="text-slate-400 text-[10px]">PCAP: 24KB CAPTURED</span>
        </div>
        <div className="space-y-1.5 font-mono text-[11px]">
          <div className="bg-white p-2 rounded border border-slate-200">
            <span className="text-slate-400 text-[9px] block uppercase font-medium">NETWORK VECTOR</span>
            <span className="text-slate-800 font-semibold">192.168.10.45</span> <span className="text-slate-400 text-[10px]">(ENG-WS-02)</span>
            <span className="text-teal-600 font-bold px-0.5">→</span>
            <span className="text-slate-800 font-semibold">192.168.10.104</span> <span className="text-slate-400 text-[10px]">(PLC-LINE-04)</span>
          </div>
          <div className="bg-white p-2 rounded border border-slate-200 space-y-1">
            <span className="text-slate-400 text-[9px] block uppercase font-medium">PAYLOAD DECODE</span>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-500">Function:</span>
              <span className="text-red-700 font-medium">0x05 (Write Single Coil)</span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-500">Target Coil:</span>
              <span className="text-slate-800 font-medium">0x0210 (PUMP_OVERRIDE_VALVE)</span>
            </div>
          </div>
        </div>
        <div className="p-2 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-1.5">
          <Icon name="gpp_maybe" className="text-[16px] text-red-600 shrink-0" />
          <span className="text-[11px] leading-tight font-medium">Interlock zone 4 bypassed in payload sequence.</span>
        </div>
      </div>

      <div className="p-2.5 rounded-md bg-white border border-slate-200">
        <div className="flex items-center justify-between mb-1.5 text-[10px] font-mono">
          <span className="text-slate-500 uppercase">COIL 0x0210 STATE JUMP</span>
          <span className="text-red-600 font-semibold">VALVE OPEN (1)</span>
        </div>
        <svg className="w-full h-10 text-red-500" fill="none" preserveAspectRatio="none" viewBox="0 0 300 44">
          <path d="M0,36 L40,36 L80,36 L120,36 L160,36 L180,36 L182,8 L220,8 L260,8 L300,8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M0,36 L40,36 L80,36 L120,36 L160,36 L180,36 L182,8 L220,8 L260,8 L300,8 L300,44 L0,44 Z" fill="currentColor" fillOpacity="0.06" />
          <circle cx="182" cy="8" fill="#ef4444" r="2.5" />
        </svg>
        <div className="flex justify-between font-mono text-[9px] text-slate-400 mt-1">
          <span>14:25 UTC</span>
          <span className="text-red-600 font-medium">TRIGGER: 14:32</span>
          <span>14:35 UTC</span>
        </div>
      </div>

      <div className="p-2.5 rounded-md bg-slate-50 border border-slate-200/80 text-xs">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono font-semibold uppercase text-slate-700">Incident Correlation</span>
          <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">LINKED</span>
        </div>
        <p className="text-slate-600 text-[11px] leading-relaxed">
          Correlated with <Link to="/incidents" className="font-medium text-teal-700 hover:underline">Incident INC-104</Link> (Unauthorized PLC Override via ENG-WS-02).
        </p>
      </div>

      <div className="p-2.5 rounded-md bg-teal-50/60 border border-teal-200/70 text-xs">
        <div className="flex items-center gap-1 text-teal-800 font-medium mb-1">
          <Icon name="lightbulb" className="text-[14px]" />
          <span className="text-[10px] font-mono uppercase font-bold tracking-tight">Playbook Response</span>
        </div>
        <p className="text-teal-900 text-[11px] leading-relaxed font-medium">Isolate ENG-WS-02 switch port and apply PLC read-only safety lock immediately.</p>
      </div>

      <div className="pt-1 flex flex-col gap-2">
        <button type="button" onClick={() => navigate('/incidents')} className="w-full h-8 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs shadow-sm transition inline-flex items-center justify-center gap-1.5">
          <Icon name="crisis_alert" className="text-[16px]" />
          <span>Escalate to Incident INC-104</span>
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => navigate('/response')} className="h-8 rounded-md bg-white border border-red-200 text-red-700 hover:bg-red-50 font-medium text-xs transition inline-flex items-center justify-center gap-1 shadow-sm">
            <Icon name="leak_remove" className="text-[15px]" />
            <span>Quarantine</span>
          </button>
          <button type="button" className="h-8 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-xs transition inline-flex items-center justify-center gap-1 shadow-sm">
            <Icon name="notifications_paused" className="text-[15px]" />
            <span>Suppress</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Alerts() {
  const [query, setQuery] = useState('')
  const [sevOn, setSevOn] = useState([])
  const [selectedId, setSelectedId] = useState('ALT-8921')
  const [checked, setChecked] = useState(() => new Set(['ALT-8921']))
  const [drawerOpen, setDrawerOpen] = useState(true)

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALERTS.filter((a) => {
      if (sevOn.length && !sevOn.includes(a.sev)) return false
      if (!q) return true
      return [a.id, a.name, a.asset, a.rule, a.proto].some((v) => v.toLowerCase().includes(q))
    })
  }, [query, sevOn])

  const selected = ALERTS.find((a) => a.id === selectedId)
  const allChecked = rows.length > 0 && rows.every((r) => checked.has(r.id))

  const toggleSev = (k) => setSevOn((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]))
  const toggleCheck = (id) =>
    setChecked((prev) => {
      const n = new Set(prev)
      n.has(id) ? n.delete(id) : n.add(id)
      return n
    })
  const toggleAll = () => setChecked(allChecked ? new Set() : new Set(rows.map((r) => r.id)))

  return (
    <div className="flex-1 bg-[#fafafa] text-[13px] text-slate-800">
      {/* Title & controls bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-slate-900 tracking-tight">Security Alerts</h1>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-red-50 text-red-700 border border-red-200">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                18 active
              </span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>PARSER 4.2k eps</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="h-8 px-3 rounded-md text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-sm inline-flex items-center gap-1.5">
              <Icon name="check" className="text-[15px] text-slate-500" />
              <span>Acknowledge</span>
            </button>
            <button type="button" onClick={() => {}} className="h-8 px-3 rounded-md text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 transition shadow-sm inline-flex items-center gap-1.5">
              <Icon name="add" className="text-[16px]" />
              <span>Create Incident</span>
            </button>
            <button type="button" className="h-8 px-2.5 rounded-md text-xs font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition shadow-sm inline-flex items-center gap-1">
              <Icon name="file_download" className="text-[15px]" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-2.5">
          <div className="relative flex-1 max-w-lg">
            <Icon name="filter_list" className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[15px]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Filter by alert, asset, signature, IP..."
              className="w-full h-8 pl-8 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-md placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">Severity:</span>
            {SEV_PILLS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => toggleSev(p.key)}
                className={clsx(
                  'h-6 px-2 rounded text-[11px] font-mono font-medium inline-flex items-center gap-1 border transition',
                  p.cls,
                  sevOn.includes(p.key) && 'ring-1 ring-offset-1 ring-slate-400'
                )}
              >
                <span className={clsx('w-1.5 h-1.5 rounded-full', p.dot)} />
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center h-8 px-2.5 rounded-md border border-slate-200 bg-white text-xs gap-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400">Status</span>
              <select className="bg-transparent text-xs text-slate-800 font-medium outline-none cursor-pointer border-0 focus:ring-0 p-0 pr-5">
                <option>New &amp; In Triage</option>
                <option>All Statuses</option>
                <option>Escalated</option>
                <option>Suppressed</option>
              </select>
            </div>
            <div className="flex items-center h-8 px-2.5 rounded-md border border-slate-200 bg-white text-xs text-slate-700 gap-1.5 cursor-pointer hover:bg-slate-50">
              <Icon name="calendar_today" className="text-slate-400 text-[14px]" />
              <span>24h</span>
              <Icon name="expand_more" className="text-slate-400 text-[14px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Split view */}
      <div className="p-6 flex flex-col 2xl:flex-row gap-5 items-start">
        <div className="w-full 2xl:flex-1 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
          <div className="h-8 px-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span className="font-medium text-slate-700">18 ENTRIES</span>
              <span className="text-slate-300">•</span>
              <span>BUFFER IN-MEMORY</span>
            </div>
            <span className="inline-flex items-center gap-1 text-teal-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-status-blink" />LIVE STREAM
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse select-none">
              <thead>
                <tr className="h-8 bg-slate-50/70 border-b border-slate-200 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
                  <th className="w-8 px-3 text-center">
                    <input type="checkbox" checked={allChecked} onChange={toggleAll} className="h-3.5 w-3.5 rounded border-slate-300 text-teal-600 focus:ring-teal-600 cursor-pointer" />
                  </th>
                  <th className="px-2 w-20">SEV</th>
                  <th className="px-3">ALERT ID &amp; NAME</th>
                  <th className="px-3">ASSET</th>
                  <th className="px-3">RULE SIGNATURE</th>
                  <th className="px-3">PROTOCOL</th>
                  <th className="px-3">FIRST SEEN</th>
                  <th className="px-3">LAST SEEN</th>
                  <th className="px-3">STATUS</th>
                  <th className="px-3 text-right w-12">VIEW</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {rows.length === 0 && (
                  <tr><td colSpan={10} className="py-10 text-center font-mono text-[11px] uppercase tracking-wider text-slate-400">No alerts match the current filters</td></tr>
                )}
                {rows.map((a) => {
                  const isSel = a.id === selectedId
                  const low = a.sev === 'LOW'
                  return (
                    <tr
                      key={a.id}
                      onClick={() => { setSelectedId(a.id); setDrawerOpen(true) }}
                      className={clsx(
                        'h-10 transition-colors cursor-pointer',
                        isSel ? 'bg-teal-50/40 hover:bg-teal-50 border-l-2 border-teal-600' : 'hover:bg-slate-50'
                      )}
                    >
                      <td className="px-3 text-center" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" checked={checked.has(a.id)} onChange={() => toggleCheck(a.id)} className="h-3.5 w-3.5 rounded border-slate-300 text-teal-600 focus:ring-teal-600 cursor-pointer" />
                      </td>
                      <td className="px-2">
                        <span className={clsx('inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold border', ALERT_SEV[a.sev])}>{a.sev}</span>
                      </td>
                      <td className="px-3">
                        <div className="flex flex-col">
                          <span className={clsx('leading-tight', a.sev === 'CRIT' ? 'font-semibold text-slate-900' : low ? 'font-medium text-slate-700' : 'font-medium text-slate-800')}>{a.name}</span>
                          <span className="font-mono text-[10px] text-slate-400">{a.id}</span>
                        </div>
                      </td>
                      <td className={clsx('px-3 font-mono text-[11px] text-slate-800 whitespace-nowrap', a.sev === 'CRIT' && 'font-medium')}>{a.asset}</td>
                      <td className={clsx('px-3 font-mono text-[11px] truncate max-w-[150px]', low ? 'text-slate-500' : 'text-slate-600')}>{a.rule}</td>
                      <td className={clsx('px-3 font-mono text-[11px] whitespace-nowrap', low ? 'text-slate-400' : 'text-slate-500')}>{a.proto}</td>
                      <td className="px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">{a.first}</td>
                      <td className={clsx('px-3 font-mono text-[11px] whitespace-nowrap', low ? 'text-slate-600' : 'text-slate-700 font-medium')}>{a.last}</td>
                      <td className="px-3">
                        <span className={clsx('inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium border', ALERT_STATUS[a.status])}>{a.status}</span>
                      </td>
                      <td className="px-3 text-right">
                        <button type="button" className={clsx('p-1 text-slate-400 transition', isSel ? 'hover:text-teal-700' : 'hover:text-slate-800')}>
                          <Icon name="arrow_forward" className="text-[15px]" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="h-9 px-3 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <Icon name="hub" className="text-[15px] text-teal-600" />
              <span className="text-slate-700 font-medium">INDUSTRIAL FABRIC:</span>
              <span className="text-teal-800 font-semibold">ZONE 4 INTERLOCK ENGAGED</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-400">
              <span>DROP: 0.00%</span>
              <span>TCP RETRANS: 1.2%</span>
              <span>CYCLE: 250ms</span>
            </div>
          </div>
        </div>

        {drawerOpen && (
          <div className="w-full 2xl:w-[420px] flex-shrink-0 flex flex-col gap-3">
            <Drawer alert={selected} onClose={() => setDrawerOpen(false)} />
          </div>
        )}
      </div>
    </div>
  )
}
