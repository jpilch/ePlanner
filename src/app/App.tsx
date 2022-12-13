import styles from "./App.module.scss";
import Calendar from "../features/calendar/components/Calendar";
import Events from "../features/events/Events";

export default function App() {
    return (
        <main className={styles.app}>
            <h1 className={styles.app__heading}>
                ePlanner
            </h1>
            <Calendar />
            <Events />
        </main>
    )
}