import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // srtict mode is a wrapper which takes care for the errors in the code
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)
