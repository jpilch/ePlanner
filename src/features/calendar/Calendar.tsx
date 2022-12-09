import styles from "./Calendar.module.scss"
import CalendarTable from "./CalendarTable"
import CalendarNav from "./CalendarNav"

export default function Calendar() {
    return (
        <section className={styles.calendar}>
            <CalendarNav />
            <CalendarTable />
        </section>
    )
}