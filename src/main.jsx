import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterProvider from './Counter/Counter.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routing/Routing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>

      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </CounterProvider>
  </StrictMode>,
)
