import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {HooksApp} from "./HooksApp.jsx";
import {CounterApp} from "./01-useState/CounterApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
