import styles from "./App.module.scss";
import Calendar from "../features/calendar/components/Calendar";
import Events from "../features/events/Events";
import { populate } from "../features/storage/populate";

populate();

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