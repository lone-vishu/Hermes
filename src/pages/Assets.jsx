import { useMemo, useState } from 'react'
import clsx from 'clsx'
import Icon from '../components/Icon.jsx'
import { ASSETS, ASSET_STATUS, TIER_CLS, ZONE_CLS } from '../data/assets.js'

const STAT_CARD = 'bg-white p-4 rounded-xl border border-border shadow-2xs flex flex-col justify-between'
const FILTER_BOX = 'flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg'
const SELECT = 'bg-transparent text-xs text-slate-700 font-medium outline-none cursor-pointer p-0 pr-5 border-0 focus:ring-0'

const ZONES = [
  { v: 'all', l: 'All Purdue Levels' },
  { v: 'l1', l: 'Level 0/1 Field & Control' },
  { v: 'l2', l: 'Level 2 Supervisory' },
  { v: 'l3', l: 'Level 3 Operations' },
]
const TIERS = [
  { v: 'all', l: 'All Tiers' },
  { v: '1', l: 'Tier 1 - Critical' },
  { v: '2', l: 'Tier 2 - High' },
  { v: '3', l: 'Tier 3 - Standard' },
]
const STATUSES = [
  { v: 'all', l: 'All Statuses' },
  { v: 'attention', l: 'Anomaly / Attention' },
  { v: 'investigating', l: 'Investigating' },
  { v: 'healthy', l: 'Healthy / Normal' },
  { v: 'offline', l: 'Offline' },
]

const statusGroup = (s) =>
  s === 'Anomaly' || s === 'Flagged' ? 'attention' : s === 'Investigating' ? 'investigating' : 'healthy'

export default function Assets() {
  const [query, setQuery] = useState('')
  const [zone, setZone] = useState('all')
  const [tier, setTier] = useState('all')
  const [status, setStatus] = useState('all')
  const [selected, setSelected] = useState('PLC-LINE-04')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ASSETS.filter((a) => {
      if (zone !== 'all' && a.level !== zone) return false
      if (tier !== 'all' && String(a.tier) !== tier) return false
      if (status !== 'all' && statusGroup(a.status) !== status) return false
      if (!q) return true
      return [a.name, a.type, a.vendor, a.model, a.zone, a.ip, a.mac, a.fw, a.status].some((v) => v.toLowerCase().includes(q))
    })
  }, [query, zone, tier, status])

  const reset = () => { setQuery(''); setZone('all'); setTier('all'); setStatus('all') }

  return (
    <div className="flex-1 bg-[#fafafa] text-sm">
      <div className="w-full p-8 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Industrial Asset Inventory</h1>
            <p className="text-xs text-slate-500 mt-1">Continuous passive OT discovery and Purdue Model Zone segmentation status across distributed cells.</p>
          </div>
          <div className="flex items-center gap-2.5">
            <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs">
              <Icon name="file_download" className="text-[16px] text-slate-500" />
              Export CSV
            </button>
            <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium transition-colors shadow-sm">
              <Icon name="sensors" className="text-[16px]" />
              Add Virtual Sensor Probe
            </button>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3.5">
          <div className={STAT_CARD}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Total Assets</span>
              <Icon name="grid_view" className="text-slate-400 text-[18px]" />
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-slate-900">24</span>
                <span className="font-mono text-[11px] text-teal-600 font-medium">100% visible</span>
              </div>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-2 overflow-hidden"><div className="bg-teal-600 h-full w-full" /></div>
            </div>
          </div>

          <div className={STAT_CARD}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">L1 Basic Control</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">PLCs</span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-slate-900">10</span>
                <span className="font-mono text-[11px] text-slate-400">41.6% OT</span>
              </div>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-2 overflow-hidden"><div className="bg-teal-500 h-full w-[41.6%]" /></div>
            </div>
          </div>

          <div className={STAT_CARD}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">L2 Supervisory</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">SCADA/HMI</span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-slate-900">8</span>
                <span className="font-mono text-[11px] text-slate-400">33.3% Hybrid</span>
              </div>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-2 overflow-hidden"><div className="bg-sky-500 h-full w-[33.3%]" /></div>
            </div>
          </div>

          <div className={STAT_CARD}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">L3 Operations</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">MES</span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-slate-900">6</span>
                <span className="font-mono text-[11px] text-slate-400">25.0% Ind. IT</span>
              </div>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-2 overflow-hidden"><div className="bg-indigo-400 h-full w-[25%]" /></div>
            </div>
          </div>

          <div className={clsx(STAT_CARD, 'col-span-2 md:col-span-1 border-rose-200/80 bg-gradient-to-b from-rose-50/20 to-transparent')}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-rose-600">At-Risk Assets</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-status-blink" />
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-rose-600">3</span>
                <span className="font-mono text-[10px] text-rose-700 bg-rose-100/80 px-1.5 py-0.5 rounded font-semibold">SEV-1/2</span>
              </div>
              <div className="w-full bg-rose-100 h-1 rounded-full mt-2 overflow-hidden"><div className="bg-rose-500 h-full w-[12.5%]" /></div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white p-3 rounded-xl border border-border shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex-1 max-w-md focus-within:bg-white focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 transition-all">
            <Icon name="search" className="text-slate-400 text-[18px]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
              type="text"
              placeholder="Filter by name, MAC, vendor, firmware, zone..."
              className="bg-transparent border-0 outline-none text-xs text-slate-800 placeholder:text-slate-400 w-full p-0 focus:ring-0"
            />
            <kbd className="font-mono text-[10px] text-slate-400 bg-white px-1 py-0.5 rounded border border-slate-200 select-none">ESC</kbd>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs">
            <div className={FILTER_BOX}>
              <span className="font-mono text-[11px] text-slate-400 uppercase">Zone:</span>
              <select value={zone} onChange={(e) => setZone(e.target.value)} className={SELECT}>
                {ZONES.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
              </select>
            </div>
            <div className={FILTER_BOX}>
              <span className="font-mono text-[11px] text-slate-400 uppercase">Tier:</span>
              <select value={tier} onChange={(e) => setTier(e.target.value)} className={SELECT}>
                {TIERS.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
              </select>
            </div>
            <div className={FILTER_BOX}>
              <span className="font-mono text-[11px] text-slate-400 uppercase">Status:</span>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className={SELECT}>
                {STATUSES.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
              </select>
            </div>
            <button type="button" onClick={reset} title="Reset Filters" className="p-1.5 text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
              <Icon name="restart_alt" className="text-[17px]" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col gap-6 items-start">
          <div className="w-full bg-white rounded-xl border border-border shadow-2xs overflow-hidden flex flex-col">
            <div className="px-4 py-3 bg-slate-50/70 border-b border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-slate-400 uppercase">Active Subnet:</span>
                <span className="font-mono text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">VLAN-OT-CELL04 [192.168.10.0/24]</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">{rows.length} of 24 Telemetry Profiles</span>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border text-slate-400 font-mono text-[11px] uppercase tracking-wider h-9 bg-white">
                    <th className="px-4 py-2 font-medium">Asset &amp; Type</th>
                    <th className="px-3 py-2 font-medium">Vendor / Model</th>
                    <th className="px-3 py-2 font-medium">Zone</th>
                    <th className="px-3 py-2 font-medium">IP &amp; MAC</th>
                    <th className="px-3 py-2 font-medium">Firmware</th>
                    <th className="px-3 py-2 font-medium">Tier</th>
                    <th className="px-3 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {rows.length === 0 && (
                    <tr><td colSpan={8} className="py-10 text-center font-mono text-[11px] uppercase tracking-wider text-slate-400">No assets match the current filters</td></tr>
                  )}
                  {rows.map((a) => {
                    const isSel = a.name === selected
                    const st = ASSET_STATUS[a.status]
                    return (
                      <tr
                        key={a.name}
                        onClick={() => setSelected(a.name)}
                        className={clsx(
                          'transition-colors cursor-pointer group',
                          isSel ? 'bg-teal-50/40 hover:bg-teal-50/70 border-l-2 border-teal-600' : 'hover:bg-slate-50'
                        )}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className={clsx('w-2 h-2 rounded-full shrink-0', st.dot, a.blink && 'animate-status-blink')} />
                            <div className="flex flex-col">
                              <span className="font-mono font-semibold text-slate-900 group-hover:text-teal-700">{a.name}</span>
                              <span className="text-[11px] text-slate-400">{a.type}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <div className="flex flex-col">
                            <span className="font-medium text-slate-800">{a.vendor}</span>
                            <span className="text-[11px] text-slate-400 truncate max-w-[110px]">{a.model}</span>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <span className={clsx('font-mono text-[11px] px-1.5 py-0.5 rounded border', ZONE_CLS[a.zoneTone])}>{a.zone}</span>
                        </td>
                        <td className="px-3 py-3 font-mono text-[11px]">
                          <div className="text-slate-800">{a.ip}</div>
                          <div className="text-[10px] text-slate-400">{a.mac}</div>
                        </td>
                        <td className="px-3 py-3 font-mono text-[11px] text-slate-600">{a.fw}</td>
                        <td className="px-3 py-3">
                          <span className={clsx('font-mono text-[10px] px-1.5 py-0.5 rounded border uppercase', TIER_CLS[a.tier])}>Tier {a.tier}</span>
                        </td>
                        <td className="px-3 py-3">
                          <span className={clsx('inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border', st.pill)}>
                            <span className={clsx('w-1.5 h-1.5 rounded-full', st.dot)} /> {a.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            className={clsx(
                              'px-2.5 py-1 text-[11px] font-medium rounded transition-colors',
                              isSel
                                ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-2xs'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200'
                            )}
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="px-4 py-2.5 bg-slate-50/70 border-t border-border flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[11px] gap-2">
              <div className="flex items-center gap-4">
                <span>PROFINET / MODBUS-TCP: <strong className="text-slate-800">ACTIVE TAP 3</strong></span>
                <span>INGEST: <strong className="text-teal-700 font-semibold">4,812 pps</strong></span>
              </div>
              <div className="flex items-center gap-1">
                <button className="px-2 py-0.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded disabled:opacity-40" disabled type="button">Prev</button>
                <span className="px-2 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 font-semibold rounded">1</span>
                <button className="px-2 py-0.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded" type="button">2</button>
                <button className="px-2 py-0.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded" type="button">Next</button>
              </div>
            </div>
          </div>

          {/* Micro-segmentation */}
          <div className="w-full bg-white rounded-xl border border-border shadow-2xs p-4 flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-800">Micro-segmentation Rules</span>
              <span className="font-mono text-[10px] text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded font-medium">ENFORCED</span>
            </div>
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-600">L1 Cell to L2 SCADA Direct:</span>
                <span className="font-mono text-[11px] font-semibold text-teal-700">AUTHORIZED (PORT 102/S7)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-600">L1 Ingress from IT/Enterprise:</span>
                <span className="font-mono text-[11px] font-semibold text-rose-600">BLOCKED VIA CONDUIT 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
