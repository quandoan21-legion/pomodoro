function NavBar() {
    return (
        <nav className="navbar">
            <h1>Poromodo Assistance</h1>
            <div className="links">
                <a href="/setting">Settings</a>
                <a href="/public">History</a>
                <a href="/feedback">Feedback</a>
            </div>
        </nav>
    );
}

export default NavBar;