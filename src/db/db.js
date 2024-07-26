// db.js
import Dexie from 'dexie';

export const db = new Dexie('Pomodoro1');  // database is database name with 1 version
db.version(1).stores({
    users: '++id, userName , password , role', // Primary key and indexed props
    pomodoros: '++id, userID, pomodoroStart, pomodoroEnd',
});

