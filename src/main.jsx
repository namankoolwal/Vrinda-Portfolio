import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SpeedInsights/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
