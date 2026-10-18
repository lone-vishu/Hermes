import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="pl-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="w-full pt-14 flex-1 flex flex-col">
          <Outlet />
        </main>
      </div>
    </>
  )
}
