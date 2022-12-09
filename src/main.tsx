import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import App from "./app/App";
import CalendarProvider from './context/CalendarContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CalendarProvider>
            <App />
        </CalendarProvider>
    </React.StrictMode>
)
