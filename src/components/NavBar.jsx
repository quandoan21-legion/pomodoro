import navLogo from '../img/poromodo.png';
import {Link} from "react-router-dom";
import {IsLoginContext} from "../App";
import {useContext, useState} from "react";

const clearNavItemActive = () => {
    const activeItems = document.getElementsByClassName('nav-item-active');
    if (activeItems.length > 0) {
        activeItems[0].classList.remove('nav-item-active');
    }
}

const activeNavItem = (event) => {
    clearNavItemActive();
    const id = event.target.id;
    const active = document.getElementById(id);
    active.classList.add('nav-item-active');
}

function Logout() {
    const isLogin = useContext(IsLoginContext);
    isLogin.setLoggedout()
}

function NavBar() {
    return (<nav className="navbar pad5">
        <div className="navbar-brand">
            <a href={"#"}><img src={navLogo} alt="" className="navbar-logo"/></a>
            <h1>Pomodoro Assistance</h1>
        </div>
        <div className="links">
            {/*<Link id="settings" onClick={activeNavItem} to="/settings">Settings</Link>*/}
            <Link id="history" onClick={activeNavItem} to="/">History</Link>
            <Link id="pomodoro" onClick={activeNavItem} to="/pomodoro">Pomodoro</Link>
            <Link id="feedback" onClick={activeNavItem} to="/login">Login</Link>
            <Link id="settings" onClick={activeNavItem} to="/register">Register</Link>
        </div>
    </nav>);
}

export default NavBar;