import db, { CalendarEvent } from "./db";

const mockEvents: CalendarEvent[] = [
    {
        title: "Example event #1",
        desc: "This is an example event",
        startTimestamp: 1670997600000,
        endTimestamp: 1671033600000,
    },
    {
        title: "Example event #2",
        desc: "This is an example event",
        startTimestamp: 1671084000000,
        endTimestamp: 1671105600000,
    },
];

export async function populate() {
    await db.events.clear();
    await db.events.bulkAdd(mockEvents);
}