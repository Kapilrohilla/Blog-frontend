import React, { useState } from 'react';
import "./NavBar.scss";
const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="NavBar">
            <nav className={navOpen ? "navigation_menu block" : "navigation_menu none"}>
                <div className="searchBox">
                    <input type="search" />
                    <img src="image/search.svg" alt="search" />
                </div>
                <div className="close">
                    <img onClick={() => setNavOpen(false)} src="/image/close.svg" alt="close" />
                </div>
                <h2>Menu</h2>
                <ul>
                    <li>HOMEPAGE</li>
                    <li>JOBS</li>
                    <li>UPCOMING</li>
                </ul>
            </nav>
            <div className='container'>
                <div className="menu">
                    <img onClick={() => {
                        setNavOpen(true)
                    }} src="/image/menu.svg" alt="menu" />

                    < div className="createdBy" >
                        Editorial
                        <span > By Kapil</span>
                    </div >
                </div>
                <nav className="socialLink">
                    <img src="/image/twitter.svg" alt="" />
                    <img src="/image/facebook.svg" alt="" />
                    <img src="/image/instagram.svg" alt="" />
                    <img src="/image/snapchat.svg" alt="" />
                </nav>
            </div >
        </div>
    )
}

export default NavBar
