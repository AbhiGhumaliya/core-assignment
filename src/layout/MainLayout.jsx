import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'

function MainLayout() {
  return (
    <div className="flex gap-4 p-4 h-full overflow-hidden bg-muted font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-4 min-w-0 min-h-0 overflow-hidden">
        <TopBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
