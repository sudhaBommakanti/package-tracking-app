import React from 'react';
import { Link } from "react-router-dom";

// Media assets
import logo from "../../assets/images/logo2.png";

export default function Header() {
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>      
        </header>
    );
}