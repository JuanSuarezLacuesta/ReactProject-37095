import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestore } from './firebase/config'

initFirestore()
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
