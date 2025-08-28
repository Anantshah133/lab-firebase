import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './contexts/AuthContextProvider.jsx'
import LabContextProvider from './contexts/LabContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <LabContextProvider>
                <App />
            </LabContextProvider>
        </AuthContextProvider>
    </StrictMode>,
)