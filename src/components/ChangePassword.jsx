import {IsLoginContext} from "../App";
import {useContext, useState} from "react";
import {db} from "../db/db";

function ChangePassword() {

    let useUserContext = useContext(IsLoginContext);

    const [newPassword, setNewPassword] = useState("");

    async function handleChangePassword() {
        let id = useUserContext.userID
        if (id == -1) {
            alert("Please login to your account to change your password")
            return null
        }
        await db.users.update(id, {password: newPassword})
        alert("Your password has been updated successfully.")
    }

    return (
        <div className={"form-container"}>
            <h1>Change Your Password</h1>
            <form className={"login-register-form"}>
                <input type="text" id={"newPassword"} onChange={(e) => setNewPassword(e.target.value)}/>
                <button id={"button"} className={"submit-button"} onClick={handleChangePassword}>Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword;