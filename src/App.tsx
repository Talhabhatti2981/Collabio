import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FlowBridge from './components/FlowBridge'
import HelpPage from './pages/HelpPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { PactlyRoutes } from './pactlyRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <FlowBridge />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        {PactlyRoutes()}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
