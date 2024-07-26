import {db} from "../db/db";

async function checkUser(userName, password) {
    return await db.users.where({userName, password}).toArray();
}

export default checkUser;
