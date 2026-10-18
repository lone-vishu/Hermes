import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import Icon from '../components/Icon.jsx'
import { CHART_BARS, OVERVIEW_ALERTS, SEV } from '../data/overview.js'

const TABS = ['All Lines', 'Packaging', 'Line 04']
const ALERT_FILTERS = [
  { key: 'all', label: 'All (18)', cls: 'bg-white border-slate-200 text-slate-900 font-semibold shadow-xs' },
  { key: 'critical', label: 'Critical (2)', cls: 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100 transition-colors' },
  { key: 'high', label: 'High (6)', cls: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 transition-colors' },
  { key: 'unack', label: 'Unacknowledged', cls: 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 transition-colors' },
]

export default function Overview() {
  const navigate = useNavigate()
  const [tab, setTab] = useState(0)
  const [filter, setFilter] = useState('all')
  const [range, setRange] = useState('24h')

  const rows = OVERVIEW_ALERTS.filter((a) => {
    if (filter === 'critical') return a.sev === 'critical'
    if (filter === 'high') return a.sev === 'high'
    if (filter === 'unack') return !a.ack
    return true
  })

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl font-semibold text-slate-900 tracking-tight">Factory Security Overview</h1>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700">Cell Alpha-Delta</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Real-time telemetry and anomaly correlation across Industrial Cell lines A–D and Supervisory SCADA.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-white px-2.5 py-1 rounded-md border border-slate-200 text-xs">
              <Icon name="schedule" className="text-[15px] text-slate-400 mr-1.5" />
              <span className="text-[11px] font-mono uppercase text-slate-400 mr-1">Range:</span>
              <select
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="bg-transparent text-xs font-medium text-slate-700 border-0 outline-none cursor-pointer focus:ring-0 p-0 pr-4"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="12h">Last 12 Hours</option>
                <option value="6h">Last 6 Hours</option>
                <option value="1h">Last 60 Minutes</option>
              </select>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>SYNC: 10s</span>
            </div>
            <button type="button" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors text-xs font-medium shadow-xs">
              <Icon name="download" className="text-[15px] text-slate-500" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Posture banner */}
        <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-teal-700 shadow-2xs">
              <Icon name="precision_manufacturing" className="text-[18px]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-slate-900">Smart Plant Sector 03</span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-mono text-slate-500">Distributed Safety Matrix v4.2</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-1.5 py-px rounded bg-amber-50 text-amber-700 border border-amber-200">
                  <span className="w-1 h-1 rounded-full bg-amber-500" /> Active Staging
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-0.5">Subnet: 10.240.12.0/22 &nbsp;|&nbsp; Fieldbus: PROFINET / Modbus TCP &nbsp;|&nbsp; MTTR: 14m</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono border-t md:border-t-0 md:border-l border-slate-200 pt-2 md:pt-0 md:pl-5">
            <div>
              <span className="text-[10px] uppercase text-slate-400 block">Gateway Latency</span>
              <span className="text-xs font-medium text-slate-800">0.84 ms <span className="text-slate-400 text-[10px]">(Jitter 0.02ms)</span></span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div>
              <span className="text-[10px] uppercase text-slate-400 block">Boundary Rules</span>
              <span className="text-xs font-medium text-slate-800">1,492 Enforced</span>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Open Alerts</span>
              <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-medium">+3 / 1h</span>
            </div>
            <div className="my-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">18</span>
              <span className="text-[11px] text-slate-400 uppercase font-mono">Signals</span>
            </div>
            <div className="flex items-center gap-1.5 pt-2.5 border-t border-slate-100 text-[10px] font-mono">
              <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-medium">2 CRIT</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">6 HIGH</span>
              <span className="px-1.5 py-0.5 rounded bg-yellow-50 text-yellow-700 border border-yellow-200">7 MED</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">3 LOW</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Active Incidents</span>
              <Icon name="crisis_alert" className="text-[17px] text-teal-600" />
            </div>
            <div className="my-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">4</span>
              <span className="text-[11px] text-slate-400 uppercase font-mono">Correlated</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-2.5 border-t border-slate-100 truncate">
              <span className="font-medium text-slate-800">2</span> Investigating <span className="text-slate-300">•</span>{' '}
              <span className="text-amber-600 font-medium">1</span> Contained <span className="text-slate-300">•</span>{' '}
              <span className="text-rose-600 font-medium">1</span> Escalated
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Assets Monitored</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200 font-medium">100% INGEST</span>
            </div>
            <div className="my-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">24</span>
              <span className="text-[11px] text-slate-400 uppercase font-mono">Nodes</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <span>16 Industrial OT</span>
              <span className="text-slate-300">/</span>
              <span>8 Supervisory IT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            </div>
          </div>

          <div className="rounded-lg border border-rose-200/90 bg-rose-50/20 p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-rose-700 flex items-center gap-1">
                <Icon name="warning" className="text-[15px]" />
                Affected Assets
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-200 font-medium">ACTION REQ</span>
            </div>
            <div className="my-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-rose-700 tracking-tight">2</span>
              <span className="text-[11px] text-rose-600/80 uppercase font-mono">Threat State</span>
            </div>
            <div className="pt-2.5 border-t border-rose-200/60 flex items-center gap-1.5 font-mono text-[11px]">
              <span className="px-1.5 py-0.5 bg-white text-rose-700 border border-rose-200 rounded font-medium">PLC-LINE-04</span>
              <span className="px-1.5 py-0.5 bg-white text-amber-700 border border-amber-200 rounded font-medium">ENG-WS-02</span>
            </div>
          </div>
        </div>

        {/* Chart + asset posture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 rounded-lg border border-slate-200 bg-white p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">Telemetry Alert Distribution</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Segmented event volume over 24-hour cycle</p>
                </div>
                <div className="inline-flex p-0.5 bg-slate-100 rounded-md text-[11px] font-medium text-slate-600">
                  {TABS.map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTab(i)}
                      className={clsx('px-2 py-0.5 rounded transition-colors', tab === i ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'hover:text-slate-900')}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-3 pb-2 font-mono">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" />Critical</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" />High</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-300" />Medium</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-300" />Heartbeat</span>
              </div>

              <div className="w-full bg-slate-50/60 rounded-md border border-slate-100 p-3 relative">
                <svg className="w-full h-36" fill="none" preserveAspectRatio="none" viewBox="0 0 600 140">
                  {[35, 70, 105].map((y) => (
                    <line key={y} stroke="#e2e8f0" strokeDasharray="2,2" strokeWidth="1" x1="0" x2="600" y1={y} y2={y} />
                  ))}
                  <path d="M0,132 Q75,120 150,126 T300,122 T450,112 T600,125" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                  {CHART_BARS.map(([fill, h, o, x, y], i) => (
                    <rect key={i} fill={fill} height={h} opacity={o} rx="1" width="14" x={x} y={y} />
                  ))}
                </svg>
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 pt-2 border-t border-slate-200">
                  <span>-24H (02:00)</span>
                  <span>-18H (08:00)</span>
                  <span>-12H (14:00)</span>
                  <span>-6H (20:00)</span>
                  <span className="text-teal-700 font-semibold">NOW (02:18)</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Icon name="query_stats" className="text-[15px] text-teal-600" />
                Peak Ingestion: 844 events/min (01:45 UTC)
              </span>
              <span className="text-[11px] text-slate-400">Correlation Engine: OK</span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-lg border border-slate-200 bg-white p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="text-sm font-semibold text-slate-900">Asset Health &amp; Posture</h2>
                <span className="text-[11px] font-mono text-slate-500">24/24 PING RESP</span>
              </div>
              <div className="space-y-2 mt-3">
                <div className="p-2.5 bg-rose-50/40 rounded-md border border-rose-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-900">Line 04 Assembly PLCs</span>
                      <span className="text-[11px] font-mono text-rose-700">PLC-LINE-04 • Command Anomaly</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-200">DEGRADED</span>
                </div>
                <div className="p-2.5 bg-amber-50/40 rounded-md border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-900">Engineering Workstations</span>
                      <span className="text-[11px] font-mono text-amber-700">ENG-WS-02 • RDP Brute-Force</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">FLAGGED</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-md border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-900">Core OT Infrastructure</span>
                      <span className="text-[11px] font-mono text-slate-500">SW-CORE-01, SENSOR-07, SCADA-SRV</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">NORMAL</span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-slate-50/70 p-2.5 rounded-md border border-slate-200/80">
              <div className="flex items-center justify-between text-xs pb-1 font-mono">
                <span className="text-slate-600">Telemetry Ingestion</span>
                <span className="font-medium text-teal-700">99.8%</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full rounded-full" style={{ width: '99.8%' }} />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5">
                <span>Loss: 0.00%</span>
                <span>Buffer: 4.1MB / 128MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts table */}
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-xs">
          <div className="p-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/60">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-slate-900">Recent Critical &amp; OT Telemetry Alerts</h2>
              <span className="text-xs font-mono text-slate-400">({rows.length} priority events)</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {ALERT_FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={clsx(
                    'px-2.5 py-0.5 rounded-md border',
                    f.cls,
                    filter === f.key && f.key !== 'all' && 'ring-1 ring-offset-1 ring-slate-300'
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="h-8 bg-slate-50 border-b border-slate-200 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                  {['Severity', 'Alert Name & ID', 'Source Asset', 'Detection Rule', 'Protocol / Port', 'First Seen', 'Status'].map((h) => (
                    <th key={h} className="px-4 py-2 font-medium">{h}</th>
                  ))}
                  <th className="px-4 py-2 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.length === 0 && (
                  <tr><td colSpan={8} className="py-8 text-center font-mono text-[11px] uppercase tracking-wider text-slate-400">No alerts match this filter</td></tr>
                )}
                {rows.map((a) => {
                  const s = SEV[a.sev]
                  return (
                    <tr key={a.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={clsx('inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border', s.cls)}>
                          {s.dot && <span className={clsx('w-1.5 h-1.5 rounded-full', s.dot)} />}
                          {s.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-900">{a.name}</span>
                          <span className="font-mono text-[11px] text-slate-400">ID: {a.id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col font-mono">
                          <span className={clsx('font-medium', a.assetTone)}>{a.asset}</span>
                          <span className="text-[11px] text-slate-500 font-sans">{a.assetSub}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="font-mono text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">{a.rule}</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-mono text-[11px] text-slate-500">{a.proto}</td>
                      <td className={clsx('px-4 py-3 whitespace-nowrap font-mono text-[11px]', a.seenTone)}>{a.seen}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={clsx('font-mono text-[10px] px-1.5 py-0.5 rounded border', a.statusCls)}>{a.status}</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">
                        <button
                          type="button"
                          onClick={() => navigate(a.ghost ? '/alerts' : '/incidents')}
                          className={clsx(
                            'px-2.5 py-1 rounded font-medium transition-colors text-[11px]',
                            a.primary
                              ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-2xs'
                              : a.ghost
                              ? 'bg-transparent text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-2xs'
                          )}
                        >
                          {a.action}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="h-10 px-4 bg-slate-50/70 border-t border-slate-200 flex items-center justify-between font-mono text-[11px] text-slate-500">
            <div className="flex items-center gap-3">
              <span>Rules: <strong className="text-slate-800 font-medium">432 loaded</strong></span>
              <span className="text-slate-300">•</span>
              <span>Parser Drop Rate: <strong className="text-teal-700 font-medium">0.00%</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span>PAGE 1 OF 1</span>
              <div className="flex items-center border border-slate-200 rounded bg-white">
                <button className="p-1 text-slate-300 border-r border-slate-200 cursor-not-allowed" disabled type="button"><Icon name="chevron_left" className="text-[14px]" /></button>
                <button className="p-1 text-slate-300 cursor-not-allowed" disabled type="button"><Icon name="chevron_right" className="text-[14px]" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
