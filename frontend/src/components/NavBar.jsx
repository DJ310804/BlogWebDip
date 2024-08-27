import React, { useState } from "react";
import '../App.css';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import logoImg from '../assets/imgs/blog-web-transparent.png'
import Login from "./Login";
import { NavLink } from 'react-router-dom'; // Import NavLink

function NavBar() {
    const [menuName, setMenuName] = useState('menu');
    const [navLinksClass, setNavLinksClass] = useState('top-[-100%]');

    function onToggleMenu() {
        setMenuName(prevMenuName => prevMenuName === 'menu' ? 'close' : 'menu');
        setNavLinksClass(prevNavLinksClass => prevNavLinksClass === 'top-[-100%]' ? 'top-[9%]' : 'top-[-100%]');
    }
    
    return (
        <div className="  bg-slate-900 text-gray-300">
            <nav className="flex justify-between items-center w-[92%] mx-auto h-16">
                <div>
                    <NavLink to="/"> {/* Add NavLink to logo image */}
                        <img className="w-20 h-9  cursor-pointer" src={logoImg} alt="logo" />
                    </NavLink>
                </div>
                <div className={`nav-links duration-500 md:static absolute bg-slate-900 md:min-h-fit min-h-[80vh] left-0 ${navLinksClass} md:w-auto w-full flex items-center px-5`}>
                    <ul className=" text-lg flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <NavLink className="hover:text-gray-500 " to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/blogcreate">Create Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <NavLink to="/login">
                        <button className="bg-[#6693e2] text-white px-3 py-1 rounded-full hover:bg-[#7587a5]">Sign In</button>
                    </NavLink>
                    <IonIcon name={menuName} className="text-3xl cursor-pointer md:hidden" onClick={onToggleMenu}></IonIcon>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;