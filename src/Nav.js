import React from 'react';
import "./App.css";
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
                <div style={{ fontSize: "45px" }}>Manan</div>
            </Link>
            <ul className="nav-links">
                <Link 
                    style={{ color: "green", textDecoration: "none", marginTop: "10px" }}
                    to="/blog"
                >
                    <li>Blog</li>
                </Link>
                <Link 
                    style={{ color: "green", textDecoration: "none", marginTop: "10px", marginLeft: "45px" }}
                    to="/home"
                >
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav