import NavBar from "./components/NavBar";
import History from "./components/History";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Pomodoro from "./components/Pomodoro";

import {createContext, useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ChangePassword from "./components/ChangePassword";


export const IsLoginContext = createContext({
    isLoggedin: false,
    userID: -1,
    setLoggedin: () => {},
    setLoggedout: () => {},
});

function App() {
    const [isLoggedin, setLoggedin] = useState(false);
    const [userID, setUserID] = useState(-1);

    function handleLogin() {
        setLoggedin(true);
    }
    function handleLogout() {
        setLoggedin(false);
    }

    function handleUserID(id){
        setUserID(id)
    }

    const ctxValue = {
        isLoggedin: isLoggedin,
        userID: userID,
        setUserID: handleUserID,
        setLoggedin: handleLogin,
        setLoggedout: handleLogout,
    };

    return (<IsLoginContext.Provider value={ctxValue}>
        <Router>
            <div className="App">
                <NavBar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <History/>
                        </Route>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/feedback">
                            <History/>
                        </Route>
                        <Route path="/pomodoro">
                            <Pomodoro/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/change-password">
                            <ChangePassword/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </IsLoginContext.Provider>);
}


export default App;