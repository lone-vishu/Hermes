export const ALERT_SEV = {
  CRIT: 'bg-red-100/70 text-red-700 border-red-200',
  HIGH: 'bg-amber-50 text-amber-700 border-amber-200',
  MED: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  LOW: 'bg-slate-100 text-slate-600 border-slate-200',
}

export const ALERT_STATUS = {
  OPEN: 'bg-red-50 text-red-700 border-red-200',
  TRIAGE: 'bg-amber-50 text-amber-800 border-amber-200',
  LINKED: 'bg-blue-50 text-blue-700 border-blue-200',
  REVIEWED: 'bg-slate-100 text-slate-600 border-slate-200',
  RESOLVED: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  CLOSED: 'bg-slate-100 text-slate-500 border-slate-200',
}

export const ALERTS = [
  { id: 'ALT-8921', sev: 'CRIT', name: 'PLC command sequence anomaly', asset: 'PLC-LINE-04', rule: 'OT-MODBUS-UNAUTH-WRITE', proto: 'Modbus TCP :502', first: '14:32:04', last: '14:35:10', status: 'OPEN', hasDetail: true },
  { id: 'ALT-8919', sev: 'HIGH', name: 'Repeated authentication failures', asset: 'ENG-WS-02', rule: 'AUTH-BRUTE-FORCE-RDP', proto: 'RDP :3389', first: '14:18:22', last: '14:31:05', status: 'TRIAGE' },
  { id: 'ALT-8914', sev: 'HIGH', name: 'Unusual HMI access pattern', asset: 'HMI-LINE-02', rule: 'BEHAVIOR-ANOMALOUS-SESSION', proto: 'HTTP REST :8080', first: '13:50:11', last: '14:12:00', status: 'LINKED' },
  { id: 'ALT-8908', sev: 'MED', name: 'Out-of-bounds register write attempt', asset: 'PLC-LINE-04', rule: 'OT-SAFETY-INTERLOCK-WARN', proto: 'Modbus TCP', first: '13:21:44', last: '13:21:44', status: 'OPEN' },
  { id: 'ALT-8902', sev: 'MED', name: 'Unexpected firmware hash query', asset: 'SW-CORE-01', rule: 'OT-PROFINET-SNMP-WALK', proto: 'SNMP v2c', first: '13:10:05', last: '13:10:05', status: 'REVIEWED' },
  { id: 'ALT-8894', sev: 'LOW', name: 'NTP time synchronization jitter', asset: 'SENSOR-07', rule: 'NET-TIME-DRIFT', proto: 'UDP :123', first: '12:44:19', last: '12:44:19', status: 'RESOLVED' },
  { id: 'ALT-8889', sev: 'LOW', name: 'Broadcast storm threshold warning', asset: 'SW-CORE-01', rule: 'NET-FLOOD-RATE', proto: 'Layer 2', first: '11:15:00', last: '11:22:10', status: 'CLOSED' },
]
