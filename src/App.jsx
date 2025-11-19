import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import OurVision from './components/OurVision'
import Sectors from './components/Sectors'
import Careers from './components/Careers'
import Auth from './components/Auth'
import NavBar from './components/NavBar'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<OurVision />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App