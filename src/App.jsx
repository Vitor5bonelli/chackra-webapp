import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {

  return (
      <BrowserRouter>

        <Routes>

          <Route path="/Dashboard" element={<Dashboard/>} />

        </Routes>

      </BrowserRouter>
  )
}

export default App
