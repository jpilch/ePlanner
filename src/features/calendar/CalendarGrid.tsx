import styles from "./Calendar.module.scss";
import cn from "classnames";

export default function CalendarGrid() {
    return (
        <div className={styles.grid}>
            {days.map(day => (
                <CalendarGrid.Day day={day} />
            ))}
        </div>
    )
}

CalendarGrid.Day = function ({ day }: { day: number }) {
    if (day === 8) {
        return (
            <div className={cn(styles.grid__day, styles["grid__day--active"])}>
                {day}
            </div>
        )
    }
    return (
        <div className={styles.grid__day}>
            {day}
        </div>
    )
}

const days = Array(42).fill(null).map((_, i) => i);