import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false)
        }
    };
    const [submenuActive, setSubmenuActive] = useState(false);
    const activateSubMenu = () => setSubmenuActive(!submenuActive);


    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>WebWork.</h1>
            </Link>



            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>





                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/News">News&Projekte</Link>
                </li>
                <li className="parentMenu">
                    <a href="#" onClick={activateSubMenu}>Mitarbeiter</a>
                    <div className={submenuActive ? "submenu active" : "submenu"}>
                        <ul>
                            <li>
                            <Link to="/Mitarbeiter">Vorstand</Link>
                            </li>
                            <li>
                            <Link to="/Mitarbeiter">Team</Link>
                            </li>
                        </ul>
                    </div>
                    
                </li>
                
                <li>
                    <Link to="/Kontakte">Kontakt</Link>



                </li>


            </ul>
            <div className="hamburger" onClick=
                {handleClick}>
                {click ? (
                    <FaTimes size={20} style={{
                        color:
                            "#fff"
                    }} />
                ) : (

                    <FaBars size={20} style={{
                        color:
                            "#fff"
                    }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;