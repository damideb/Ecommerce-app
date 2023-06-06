import React from "react"
import './styles.css'
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
import { createRoot } from 'react-dom/client'
import App from "./App"




createRoot(document.getElementById('root')).render(<ContextProvider>
    <Router>
        <App />
    </Router>
</ContextProvider>)