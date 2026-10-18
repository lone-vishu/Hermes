import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import Icon from './Icon.jsx'

const NAV = [
  { to: '/overview', label: 'Overview', icon: 'space_dashboard' },
  { to: '/alerts', label: 'Alerts', icon: 'warning', badge: '18', badgeClass: 'bg-rose-50 text-rose-600 border border-rose-200' },
  { to: '/incidents', label: 'Incidents', icon: 'crisis_alert', badge: '4', badgeClass: 'bg-blue-50 text-blue-600 border border-blue-200' },
  { to: '/assets', label: 'Assets', icon: 'memory', badge: '24', badgeClass: 'bg-slate-100 text-slate-500 border border-slate-200' },
  { to: '/response', label: 'Response', icon: 'shield_with_heart', badge: '3', badgeClass: 'bg-teal-50 text-teal-700 border border-teal-200' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#fafbfc] border-r border-[#e2e8f0] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col">
        <div className="h-14 px-5 flex items-center justify-between border-b border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#00685f] flex items-center justify-center text-white shadow-xs">
              <Icon name="shield" className="text-[17px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-tight text-slate-900 uppercase">Hermes</span>
              <span className="font-mono text-[9px] tracking-wider text-slate-400 uppercase leading-none">OT/IT Security</span>
            </div>
          </div>
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">v2.4</span>
        </div>

        <div className="px-5 pt-5 pb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-medium">Telemetry &amp; Command</span>
        </div>

        <nav className="flex flex-col gap-0.5 px-3">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'flex items-center justify-between px-3 py-2 rounded-md transition-colors text-xs',
                  isActive
                    ? 'bg-teal-50/80 text-[#00685f] font-medium border border-teal-200/60 shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-2.5">
                    <Icon name={item.icon} className={clsx('text-[17px]', isActive ? 'text-[#00685f]' : 'text-slate-400')} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={clsx(
                        'font-mono text-[10px] px-1.5 rounded',
                        isActive ? 'py-0.5 bg-[#00685f] text-white font-medium' : clsx('py-px', item.badgeClass)
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-3.5 border-t border-[#e2e8f0] bg-white flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-status-blink" />
            <span className="font-mono text-[10px] text-slate-600 tracking-tight uppercase font-medium">Simulated OT Sensors</span>
          </div>
          <span className="font-mono text-[9px] px-1 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">ONLINE</span>
        </div>
        <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wide">Engine Latency</span>
          <span className="font-mono text-[11px] font-medium text-slate-700">12ms</span>
        </div>
      </div>
    </aside>
  )
}
