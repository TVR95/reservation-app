import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./home/Home";
import Search from "./search/Search";
import About from "./about/About";
import NavLogin from "./user-panel/NavLogin";

function Header() {
    return (
        <header>

            <Router>
                <div className="logo"></div>
                <Navigation />
                <NavLogin />

                <Route path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/about" component={About} />
            </Router>

        </header>
    );
}

export default Header;