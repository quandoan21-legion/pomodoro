import NavBar from "./components/NavBar";
import History from "./components/History";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Pomodoro from "./components/Pomodoro";

import {createContext, useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";


export const IsLoginContext = createContext({
    isLoggedin: false,
    setLoggedin: () => {},
    setLoggedout: () => {},
});

function App() {
    const [isLoggedin, setLoggedin] = useState(false);

    function handleLogin() {
        setLoggedin(true);
    }
    function handleLogout() {
        setLoggedin(false);
    }

    const ctxValue = {
        isLoggedin: isLoggedin,
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
                    </Switch>
                </div>
            </div>
        </Router>
    </IsLoginContext.Provider>);
}


export default App;