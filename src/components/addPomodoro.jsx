import {db} from "../db/db";

async function addPomodoro(userID, start, end){

    await db.pomodoros.add({
        userID,
        start,
        end,
    });

}

export default addPomodoro;