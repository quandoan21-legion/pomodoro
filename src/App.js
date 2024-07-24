import NavBar from "./components/NavBar";
import History from "./components/History";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Settings from "./components/Settings";
import Pomodoro from "./components/Pomodoro";
import Student from "./components/Student";


function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <History/>
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/feedback">
                            <History/>
                        </Route>
                        <Route path="/pomodoro">
                            <Pomodoro/>
                        </Route>
                        <Route path="/student">
                            <Student />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
