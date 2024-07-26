import checkUser from "./checkUser";
import {useContext} from "react";

function Login() {

    const isLoggedIn = useContext(IsLoginContext)
    return (
        <div>
            <h1>Login</h1>

            <form action="#">
                <input type="text" id="userName" placeholder="Enter your username" required/>
                <br/>
                <input type="password" id="password" placeholder="Enter your password" required/>
                <br/>
                <button onClick={checkUser}>Login</button>
            </form>
        </div>
    );
}

export default Login;