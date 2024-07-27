import {db} from "../db/db";

async function addUser(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    alert("Your account has been added successfully.")
    await db.users.add({
        userName,
        password,
    })

}


export default addUser;