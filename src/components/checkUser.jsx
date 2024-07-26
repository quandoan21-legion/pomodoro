import {db} from "../db/db";
import {useContext} from "react";

async function CheckUser(props) {
    let userNameIndex = document.getElementById("userName").value;
    let passwordIndex = document.getElementById("password").value;

    const table = await db.users.where({userName: userNameIndex, password: passwordIndex}).toArray();
    if (table !== null) {
        console.log("logged in")
    }else {
        console.log("lmaos")
    }

}

export default CheckUser