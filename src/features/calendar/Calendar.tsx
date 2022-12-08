import styles from "./Calendar.module.scss"
import CalendarNavigation from "./CalendarNavigation"
import CalendarGrid from "./CalendarGrid"

export default function Calendar() {
    return (
        <section className={styles.calendar}>
            <CalendarNavigation />
            <CalendarGrid />
        </section>
    )
}