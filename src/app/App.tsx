import styles from "./App.module.scss";
import Calendar from "../features/calendar/Calendar";

export default function App() {
    return (
        <main className={styles.app}>
            <h1 className={styles.app__heading}>
                eCalendar
            </h1>
            <Calendar />
        </main>
    )
}