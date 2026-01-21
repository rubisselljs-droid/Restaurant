import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductoProvider } from './context/ProductoProvi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductoProvider>  
    <App />
    </ProductoProvider>
  </StrictMode>,
) 
