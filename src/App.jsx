import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import PeoplePage from './features/people/pages/PeoplePage'
import HomePage from './features/home/pages/HomePage'
import MyInfoPage from './features/myInfo/pages/MyInfoPage'
import TeamManagementPage from './features/teamManagement/pages/TeamManagementPage'
import ProjectSetupPage from './features/projectSetup/pages/ProjectSetupPage'
import HiringPage from './features/hiring/pages/HiringPage'
import ReportPage from './features/report/pages/ReportPage'
import SettingsPage from './features/settings/pages/SettingsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/people" replace />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="my-info" element={<MyInfoPage />} />
          <Route path="team-management" element={<TeamManagementPage />} />
          <Route path="project-setup" element={<ProjectSetupPage />} />
          <Route path="hiring" element={<HiringPage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
