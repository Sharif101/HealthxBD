import React from 'react';
import Style from './Navbar.module.css'
import img from '../../images/logo.png'

const componentName = (props) => {
    return (
        <div className={Style.container}>
           <nav className={Style.navbar}>
            <div className={Style.logo}>
                <img src={img} alt="" />
                <p>Logoipsum</p>
            </div>
            <div className={Style.nav_item}>
            <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><button>login</button></li>
            </ul>
            </div>
        </nav>
        </div>
    );
};

export default componentName;