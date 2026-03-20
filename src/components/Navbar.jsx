import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import '../css/navbar.css'
const Navbar = () => {
     // 狀態：控制菜單是否展開（預設 false = 隱藏）
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    // 切換菜單展開/收起
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(()=>{
        const handleClickoutside = (e) =>{
            if(isMenuOpen && navbarRef.current && !navbarRef.current.contains(e.target)){
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown",handleClickoutside);
        return()=>{
            document.removeEventListener("mousedown",handleClickoutside);
        };
    },[isMenuOpen])

    const closeMenuOnlickclick = () =>{
        setIsMenuOpen(false);
    }


    return (
    <nav className="navbar" ref={navbarRef}>
        <div className="main-logo">
            <img src="https://res.cloudinary.com/dzlcfmhts/image/upload/v1773632922/hkct_logo_sfi9iu.png" alt="logo" />
            {/* <h1>hkct</h1> */}
        </div>
        <div className={`main-burger ${isMenuOpen ? 'active' : ''}`}>
            <ul>
                <li><Link to="/" onClick={closeMenuOnlickclick}>Home</Link></li>
                <li><Link to="/course" onClick={closeMenuOnlickclick}>Course</Link></li>
                <li><Link to="/network" onClick={closeMenuOnlickclick}>Network</Link></li>
                <li><Link to="/about" onClick={closeMenuOnlickclick}>About</Link></li>
                <li><Link to="/contact" onClick={closeMenuOnlickclick}>Contact</Link></li>
                <li><Link to="/joinus" onClick={closeMenuOnlickclick}>Joinus</Link></li>
                <li><Link to="/donation" onClick={closeMenuOnlickclick}>Donation</Link></li>
            </ul>
        </div>
        <div className='main-sign'>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <a href="#">Sign-In</a>
        </div>


        <div className='min-main-burger'>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-circle-user"></i>
            <button className="hamburger-btn" aria-label="打開/關閉菜單" onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
    </nav>
    );
}

export default Navbar;