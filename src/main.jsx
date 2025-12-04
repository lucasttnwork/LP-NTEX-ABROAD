import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import NewLP from './pages/NewLP.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLP />} />
        <Route path="/lp-new" element={<NewLP />} />
        <Route path="/lp1" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
