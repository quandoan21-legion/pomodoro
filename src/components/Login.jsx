import { useState, useContext } from "react";
import { IsLoginContext } from "../App";
import checkUser from "./checkUser"; // Ensure this function handles database interaction correctly

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setLoggedin, isLoggedin } = useContext(IsLoginContext);

    async function handleSubmit(event) {
        event.preventDefault();
        const isUserValid = await checkUser(userName, password);
        if (isUserValid) {
            setLoggedin();
            alert(isLoggedin);
            alert("Login Successfully");
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your username"
                    required
                />
                <br />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
