
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ClienteLayout from './layouts/ClienteLayout/ClienteLayout'
import Home from './pages/client/Home'

const Menu = lazy(() => import('./pages/client/Menu'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          <Route path="/" element={<ClienteLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
