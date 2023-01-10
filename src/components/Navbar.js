import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import {FaBars, FaTimes} from "react-icons/fa";

 const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    return (
        <div className="header">
            <Link to="/">
                <h1>WebWork.</h1>
            </Link>
            <ul className={click?  "nav-menu.active" : "nav-menu"}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/News"}>News</Link>
                </li>
                <li>
                    <Link to={"/Kontakte"}>Kontakte</Link>
                </li>
                <li>
                    <Link to={"/Mitarbeiter"}>Mitarbeiter</Link>
                </li>

            </ul>
            <div className="hamburger" onClick=
            {handleClick}>
                {click ? (
                <FaTimes size={20} style={{color: 
                    "#fff"}}/>
                ):(

                <FaBars size={20} style={{color: 
                    "#fff"}}/>
                )}</div>
        </div>
    );
};

export default Navbar;