import { v4 as uuidv4 } from "uuid";

export const DAYS_OF_THE_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",]
    .map(d => ({ name: d, id: uuidv4() }));