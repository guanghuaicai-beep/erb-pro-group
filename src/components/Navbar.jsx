import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import '../css/navbar.css'
const Navbar = () => {
     // 狀態：控制菜單是否展開（預設 false = 隱藏）
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 切換菜單展開/收起
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <nav className="navbar">
        <div className="main-logo">
            <img src="https://res.cloudinary.com/dzlcfmhts/image/upload/v1773632922/hkct_logo_sfi9iu.png" alt="logo" />
            {/* <h1>hkct</h1> */}
        </div>
        <div className={`main-burger ${isMenuOpen ? 'active' : ''}`}>
            <ul>
                <li><Link to="/" >home</Link></li>
                <li><Link to="/course" >course</Link></li>
                <li><Link to="/about" >about</Link></li>
                <li><Link to="/contact" >contact</Link></li>
            </ul>
        </div>
        <div className='main-sign'>
            <i className="fa-solid fa-cart-shopping"></i>
            <a href="#">Sign-In</a>
        </div>


        <div className='min-main-burger'>
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