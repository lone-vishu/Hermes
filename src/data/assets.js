const TIER = {
  1: 'bg-rose-50 text-rose-700 border-rose-200 font-semibold',
  2: 'bg-slate-100 text-slate-700 border-slate-200 font-medium',
  3: 'bg-slate-100 text-slate-600 border-slate-200',
}
export const TIER_CLS = TIER

export const ASSET_STATUS = {
  Anomaly: { pill: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' },
  Investigating: { pill: 'bg-sky-50 text-sky-700 border-sky-200', dot: 'bg-sky-500' },
  Flagged: { pill: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  Normal: { pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  Healthy: { pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
}

export const ZONE_CLS = {
  teal: 'bg-teal-50 text-teal-800 border-teal-200',
  sky: 'bg-sky-50 text-sky-800 border-sky-200',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
}

export const ASSETS = [
  { name: 'PLC-LINE-04', type: 'PLC Controller', vendor: 'Siemens S7-1500', model: 'CPU 1516-3 PN/DP', zone: 'L1 Cell 04', zoneTone: 'teal', level: 'l1', ip: '192.168.10.104', mac: '00:1B:1B:34:AA:91', fw: 'v2.9.4', tier: 1, status: 'Anomaly', blink: true },
  { name: 'ENG-WS-02', type: 'Engineering WS', vendor: 'Dell Precision', model: 'Model 3660', zone: 'L2 Supervisory', zoneTone: 'sky', level: 'l2', ip: '192.168.10.45', mac: '54:BF:64:12:88:E2', fw: 'Win10 LTSC', tier: 2, status: 'Investigating' },
  { name: 'HMI-LINE-02', type: 'Touch Panel HMI', vendor: 'Rockwell Auto', model: 'PanelView 5510', zone: 'L2 Supervisory', zoneTone: 'sky', level: 'l2', ip: '192.168.10.60', mac: '00:00:BC:87:D3:1F', fw: 'v8.002', tier: 2, status: 'Flagged' },
  { name: 'SW-CORE-01', type: 'Industrial Switch', vendor: 'Cisco IE-4000', model: 'Modular Switch', zone: 'L2/3 Interconn', zoneTone: 'slate', level: 'l3', ip: '192.168.10.1', mac: '70:69:79:45:90:10', fw: 'IOS 15.2', tier: 1, status: 'Normal' },
  { name: 'SENSOR-07', type: 'Thermal Sensor', vendor: 'IFM Electronic', model: 'VVB001 Vibration', zone: 'L0/1 Field', zoneTone: 'slate', level: 'l1', ip: '192.168.10.210', mac: '00:02:4B:91:EE:54', fw: 'v1.4.1', tier: 3, status: 'Normal' },
  { name: 'ROBOT-ARM-01', type: '6-Axis Manipulator', vendor: 'KUKA KR QUANTEC', model: 'Cell Manipulator', zone: 'L1 Cell 02', zoneTone: 'teal', level: 'l1', ip: '192.168.10.115', mac: '00:1E:06:55:A1:02', fw: 'KRC4 v8.3', tier: 1, status: 'Healthy' },
]
