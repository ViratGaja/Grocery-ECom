import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { AppContextProvider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
  <App />
  </AppContextProvider>
   
  </BrowserRouter>
)
