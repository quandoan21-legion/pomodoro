import addUser from "./addUser";

function Register() {

    return (
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={addUser} className="login-register-form">
                <input
                    type="text"
                    id="userName"

                    placeholder="Enter your username"
                    required
                />
                <br/>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                />
                <br/>
                <button className={"submit-button"} type={"submit"}>Register</button>
            </form>
        </div>);
}

export default Register;