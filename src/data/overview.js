// [fill, height, opacity, x, y]
export const CHART_BARS = [
  ['#cbd5e1', 20, 0.8, 15, 115], ['#cbd5e1', 25, 0.8, 40, 110], ['#cbd5e1', 15, 0.8, 65, 120],
  ['#fde047', 30, 0.8, 90, 105], ['#cbd5e1', 17, 0.8, 115, 118], ['#fde047', 45, 0.8, 140, 90],
  ['#f59e0b', 15, 0.9, 140, 75], ['#cbd5e1', 40, 0.8, 165, 95], ['#fde047', 50, 0.8, 190, 85],
  ['#f59e0b', 55, 0.9, 215, 80], ['#cbd5e1', 35, 0.8, 240, 100], ['#fde047', 45, 0.8, 265, 90],
  ['#f59e0b', 65, 0.9, 290, 70], ['#cbd5e1', 50, 0.8, 315, 85], ['#f59e0b', 75, 0.9, 340, 60],
  ['#fde047', 60, 0.8, 365, 75], ['#fde047', 55, 0.8, 390, 80], ['#f59e0b', 80, 0.9, 415, 55],
  ['#fde047', 50, 0.8, 440, 85], ['#f59e0b', 40, 0.9, 440, 45], ['#fde047', 45, 0.8, 465, 90],
  ['#f59e0b', 50, 0.9, 465, 40], ['#f43f5e', 30, 1, 465, 10], ['#fde047', 50, 0.8, 490, 85],
  ['#f59e0b', 55, 0.9, 490, 30], ['#f43f5e', 25, 1, 490, 5], ['#f59e0b', 65, 0.9, 515, 70],
  ['#f59e0b', 75, 0.9, 540, 60], ['#fde047', 55, 0.8, 565, 80],
]

export const SEV = {
  critical: { label: 'CRITICAL', cls: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-600' },
  high: { label: 'HIGH', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  med: { label: 'MED', cls: 'bg-yellow-50 text-yellow-700 border-yellow-200', dot: null },
}

export const OVERVIEW_ALERTS = [
  { sev: 'critical', name: 'PLC command sequence anomaly', id: 'ALT-8921', asset: 'PLC-LINE-04', assetSub: 'Siemens S7-1500 (Cell 4)', assetTone: 'text-teal-700', rule: 'OT-MODBUS-UNAUTH-WRITE', proto: 'ISO-TSAP • 102/tcp', seen: '4m ago', seenTone: 'text-rose-600 font-medium', status: 'Active / Unhandled', statusCls: 'bg-rose-50 text-rose-700 border-rose-200', action: 'Investigate', primary: true, ack: false },
  { sev: 'high', name: 'Repeated authentication failures', id: 'ALT-8919', asset: 'ENG-WS-02', assetSub: 'Windows 10 OT Eng (VLAN 14)', assetTone: 'text-slate-800', rule: 'AUTH-BRUTE-FORCE-RDP', proto: 'RDP • 3389/tcp', seen: '18m ago', seenTone: 'text-slate-500', status: 'Triage In Progress', statusCls: 'bg-amber-50 text-amber-700 border-amber-200', action: 'Investigate', ack: true },
  { sev: 'high', name: 'Unusual HMI access pattern', id: 'ALT-8914', asset: 'HMI-LINE-02', assetSub: 'Wonderware InTouch Node', assetTone: 'text-slate-800', rule: 'BEHAVIOR-ANOMALOUS-SESSION', proto: 'HTTP • 8080/tcp', seen: '42m ago', seenTone: 'text-slate-500', status: 'Linked: INC-104', statusCls: 'bg-slate-100 text-slate-700 border-slate-200', action: 'Investigate', ack: true },
  { sev: 'med', name: 'Unexpected firmware hash query', id: 'ALT-8902', asset: 'SW-CORE-01', assetSub: 'Cisco IE-4000 Switch', assetTone: 'text-slate-800', rule: 'OT-PROFINET-SNMP-WALK', proto: 'SNMP • 161/udp', seen: '1h 12m ago', seenTone: 'text-slate-400', status: 'Suppressed', statusCls: 'bg-slate-100 text-slate-500 border-slate-200', action: 'Review', ghost: true, ack: true },
]
