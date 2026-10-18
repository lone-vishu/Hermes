export const INC_SEV = {
  P1: { label: 'CRITICAL [P1]', cls: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-600' },
  P2: { label: 'HIGH [P2]', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  P3: { label: 'MEDIUM [P3]', cls: 'bg-sky-50 text-sky-700 border-sky-200', dot: 'bg-sky-500' },
  P4: { label: 'LOW [P4]', cls: 'bg-slate-100 text-slate-700 border-slate-200', dot: 'bg-slate-400' },
}

export const INC_STATUS = {
  'CONTAINMENT PROPOSED': 'bg-amber-50 text-amber-700 border-amber-200/80',
  INVESTIGATING: 'bg-sky-50 text-sky-700 border-sky-200',
  ACTIVE: 'bg-rose-50 text-rose-700 border-rose-200',
  RESOLVED: 'bg-teal-50 text-teal-800 border-teal-200',
}

export const INCIDENTS = [
  { id: 'INC-104', title: 'Unauthorized PLC Parameter Override via Compromised Engineering Station', source: 'Source: EDR Alert #41829 • Modbus 0x05 Single Coil', sev: 'P1', status: 'CONTAINMENT PROPOSED', scope: '192.168.10.0/24', assets: 'ENG-WS-02, PLC-LINE-04', analyst: 'Alex Vance', detected: '14:18:22 UTC' },
  { id: 'INC-103', title: 'Abnormal Sensor Telemetry & Setpoint Drift on Line 02', source: 'Source: Telemetry Monitor • Pressure deviation +18.4%', sev: 'P2', status: 'INVESTIGATING', scope: '192.168.10.112', assets: 'PLC-LINE-02, SENS-P09', analyst: 'Elena Rostova', detected: '13:50:11 UTC' },
  { id: 'INC-102', title: 'Distributed Modbus Port Scan against Subnet VLAN-04', source: 'Source: NIDS Suricata • TCP Port 502 sweep', sev: 'P2', status: 'ACTIVE', scope: '192.168.14.0/24', assets: 'SW-DIST-04, 8 Hosts', analyst: 'Marcus Chen', detected: '11:14:02 UTC' },
  { id: 'INC-101', title: 'Firmware Hash Mismatch on SW-CORE-01', source: 'Source: Config Integrity • Hash check sha256 fail', sev: 'P3', status: 'INVESTIGATING', scope: '192.168.10.1', assets: 'SW-CORE-01', analyst: 'Alex Vance', detected: '09:05:44 UTC' },
  { id: 'INC-100', title: 'Repeated Kerberos Ticket Reuse from Staging WS', source: 'Source: Active Directory Log • Event 4769 TGS Request', sev: 'P4', status: 'RESOLVED', scope: '192.168.20.15', assets: 'ENG-STAGE-01', analyst: 'Sarah Jenkins', detected: '06:22:18 UTC' },
]
