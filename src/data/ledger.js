export const LEDGER = [
  {
    id: 'ACT-4011',
    description: 'Emergency Firewall Ingress Deny on RDP Port 3389',
    asset: 'ENG-WS-02',
    ref: 'INC-104',
    refTone: 'text-rose-600 font-medium',
    approver: { name: 'Alex Vance', role: 'SecOps Lead' },
    status: 'verified',
    time: '14:36:00 UTC',
    verification: { icon: 'check', text: '0 Active Sockets', tone: 'text-teal-800', iconTone: 'text-[#00685f]' },
  },
  {
    id: 'ACT-4009',
    description: 'Baseline Snapshot Export & Configuration Lock',
    asset: 'PLC-LINE-04',
    ref: 'ALT-8921',
    refTone: 'text-amber-700',
    approver: null,
    status: 'verified',
    time: '14:33:15 UTC',
    verification: { icon: 'fingerprint', text: 'SHA-256 Validated', tone: 'text-slate-700', iconTone: 'text-[#00685f]' },
  },
  {
    id: 'ACT-3982',
    description: 'Transient Port Mirroring Enable for Deep Packet Inspection',
    asset: 'SW-CORE-01',
    ref: 'ALT-8902',
    refTone: 'text-blue-600',
    approver: { name: 'Elena Rostova', role: 'OT NetEng' },
    status: 'active',
    time: '13:15:20 UTC',
    verification: { icon: 'cable', text: 'VLAN 40 Capture Active', tone: 'text-slate-600', iconTone: 'text-blue-600' },
  },
  {
    id: 'ACT-3950',
    description: 'Force Firmware Re-validation & Cryptographic Boot Verification',
    asset: 'SENSOR-07',
    ref: 'ALT-8894',
    refTone: 'text-slate-500',
    approver: { name: 'Alex Vance', role: 'SecOps Lead' },
    status: 'failed',
    time: '12:45:00 UTC',
    verification: { icon: 'warning', text: 'Handshake retry exceeded', tone: 'text-rose-600', iconTone: '' },
  },
]

export const STATUS_STYLES = {
  verified: { label: 'EXECUTED - VERIFIED', pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-600' },
  active: { label: 'EXECUTED - ACTIVE', pill: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-600 animate-status-blink' },
  failed: { label: 'FAILED - TIMEOUT', pill: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-600' },
}

export const KPIS = [
  { label: 'Mean Time to Mitigation', value: '4m 18s', sub: '38% faster than SLA', subTone: 'text-[#00685f] font-semibold', icon: 'timer', box: 'bg-teal-50 border-teal-100 text-[#00685f]' },
  { label: 'Quorum Compliance', value: '100%', sub: 'Zero single overrides', subTone: 'text-slate-500', icon: 'policy', box: 'bg-slate-50 border-slate-200 text-slate-600' },
  { label: 'Active Interventions', value: '3 Staged', sub: '1 awaiting key turn', subTone: 'text-amber-700 font-medium', icon: 'security', box: 'bg-amber-50 border-amber-200/60 text-amber-700' },
  { label: 'Line Safety Trip Risk', value: '0.00%', valueTone: 'text-[#00685f]', sub: 'No physical trips', subTone: 'text-slate-500', icon: 'health_and_safety', box: 'bg-teal-50 border-teal-100 text-[#00685f]' },
]
