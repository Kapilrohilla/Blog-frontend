import React, { useState } from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';
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
                    <li><Link onClick={() => setNavOpen(false)} className='link' to="/">HOMEPAGE</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} className='link' to="/blogs">BLOGS</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} className='link' to="/jobs">JOBS</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} className='link' to="upcoming">UPCOMING</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} className='link' to="news">NEWS</Link></li>
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
