import {db} from "../db/db";
import {useLiveQuery} from "dexie-react-hooks";

async function addUser(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    await db.users.add({
        userName,
        password,

    })


}


export default addUser;