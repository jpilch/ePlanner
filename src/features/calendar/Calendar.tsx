import styles from "./Calendar.module.scss"
import CalendarTable from "./CalendarTable"

export default function Calendar() {

    return (
        <section className={styles.calendar}>
            <div className={styles.calendar__month}>
                December 2022
            </div>
            <CalendarTable />
        </section>
    )
}