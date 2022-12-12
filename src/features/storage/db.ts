import Dexie, { Table } from "dexie";

export interface CalendarEvent {
    id?: string;
    title: string;
    desc: string;
    startTimestamp: number;
    endTimestamp: number;
}

class EPlannerDexie extends Dexie {
    events!: Table<CalendarEvent>;

    constructor() {
        super("ePlanner");
        this.version(1).stores({
            events: "++id, startTimestamp, endTimestamp"
        })
    }
}

const db = new EPlannerDexie();

export default db;