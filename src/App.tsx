import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { FarmGuidesPage } from './pages/FarmGuidesPage'
import { EasterEggsPage } from './pages/EasterEggsPage'
import { HomePage } from './pages/HomePage'
import { LocationsPage } from './pages/LocationsPage'
import { MissionsPage } from './pages/MissionsPage'
import { PeoplePage } from './pages/PeoplePage'
import { TipsPage } from './pages/TipsPage'
import { VehiclesPage } from './pages/VehiclesPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="personagens" element={<PeoplePage />} />
        <Route path="missoes" element={<MissionsPage />} />
        <Route path="locais" element={<LocationsPage />} />
        <Route path="veiculos" element={<VehiclesPage />} />
        <Route path="easter-eggs" element={<EasterEggsPage />} />
        <Route path="guias-farm" element={<FarmGuidesPage />} />
        <Route path="dicas" element={<TipsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
