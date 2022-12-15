import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import App from "./app/App";
import CalendarProvider from './features/calendar/context/CalendarContext';
import EventsProvider from './features/events/context/CurrentDateEventsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <CalendarProvider>
        <EventsProvider>
            <App />
        </EventsProvider>
    </CalendarProvider>
)
