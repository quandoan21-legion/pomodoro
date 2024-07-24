// db.js
import Dexie from 'dexie';
export const db = new Dexie('database');  // database is database name with 1 version
db.version(1).stores({
    users: '++id, name , age', // Primary key and indexed props
    pomodoro: '++id, userID, pomodoroStart, pomodoroEnd, timeOutStart, timeOutEnd', // Primary key and indexed props
});