import styles from "./App.module.scss";
import Calendar from "../features/calendar/Calendar";
import Events from "../features/events/Events";

export default function App() {
    return (
        <main className={styles.app}>
            <h1 className={styles.app__heading}>
                Sneed's Feed and Seed (formerly Chuck's)
            </h1>
            <Calendar />
            <Events />
        </main>
    )
}