import NavBar from "./components/NavBar";
import History from "./components/History";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Pomodoro from "./components/Pomodoro";
import Login from "./components/Login";
import Redirect from "react-router-dom/es/Redirect";
import Register from "./components/Register";
import {createContext, useContext, useState} from "react";


function App() {
    const [isLogin, setIsLogin] = useState(false);
    const IsLoginContext = createContext();
    return (<IsLoginContext.Provider value={isLogin}>
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

