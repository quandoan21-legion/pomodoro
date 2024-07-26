import { db } from "../db/db";

async function checkUser(userName, password) {
    const table = await db.users.where({ userName, password }).toArray();
    return table.length > 0;
}

export default checkUser;
