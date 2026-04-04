import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import CharacterCounter from './pages/CharacterCounter'
import JsonFormatter from './pages/JsonFormatter'
import QrGenerator from './pages/QrGenerator'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character-counter" element={<CharacterCounter />} />
          <Route path="/json-formatter" element={<JsonFormatter />} />
          <Route path="/qr-generator" element={<QrGenerator />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  )
}
