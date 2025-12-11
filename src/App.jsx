import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import OurVision from './components/OurVision'
import Sectors from './components/Sectors'
import Careers from './components/Careers'
import Auth from './components/Auth'
import NavBar from './components/NavBar'
import ToastManager from './components/ToastManager'
import News from './components/News'

function App() {
  // use a wrapper keyed by location to trigger mount animations on route change
  const LocationAwareRoutes = () => {
    const location = useLocation()
    return (
      <div className="page-fade-wrapper">
        <div key={location.pathname} className="page-fade">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<OurVision />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    )
  }

  return (
    <HashRouter>
      <NavBar />
      <ToastManager />
      <LocationAwareRoutes />
    </HashRouter>
  )
}

export default App