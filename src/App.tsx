import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FlowBridge from './components/FlowBridge'
import HelpPage from './pages/HelpPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { CollabioRoutes } from './collabioRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <FlowBridge />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        {CollabioRoutes()}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
