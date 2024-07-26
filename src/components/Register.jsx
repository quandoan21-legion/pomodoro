import addUser from "./addUser";

function Register() {

    return (
        <div>
            <h1>Register</h1>
            <form action="#">
                <input type="text" id="userName" placeholder="Enter your username" required/>
                <br/>
                <input type="password" id="password" placeholder="Enter your password" required/>
                <br/>
                <button onClick={addUser}>Register</button>
            </form>
        </div>
    );
}

export default Register;