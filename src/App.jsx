import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {

  return (
      <BrowserRouter>

        <Routes>

          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Home" element={<Home/>} />

        </Routes>

      </BrowserRouter>
  )
}

export default App
