import React, { useState } from "react";
import '../App.css';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import logoImg from '../assets/imgs/blog-web-transparent.png';
import { NavLink } from 'react-router-dom'; 
import { menuOutline, closeOutline } from 'ionicons/icons';

function NavBar() {
    const [menuName, setMenuName] = useState('menu');
    const [navLinksClass, setNavLinksClass] = useState('top-[-100%]');

    function onToggleMenu() {
        setMenuName(prevMenuName => prevMenuName === 'menu' ? 'close' : 'menu');
        setNavLinksClass(prevNavLinksClass => prevNavLinksClass === 'top-[-100%]' ? 'top-[9%]' : 'top-[-100%]');
    }

    function closeMenu() {
        setMenuName('menu');
        setNavLinksClass('top-[-100%]');
    }
    
    return (
        <div className="bg-slate-900 text-gray-300">
            <nav className="flex justify-between items-center w-[92%] mx-auto h-16">
                <div>
                    <NavLink to="/"> 
                        <img className="w-20 h-9 cursor-pointer" src={logoImg} alt="logo" />
                    </NavLink>
                </div>
                <div className={`nav-links duration-500 md:static absolute bg-slate-900 md:min-h-fit min-h-[80vh] left-0 ${navLinksClass} md:w-auto w-full flex items-center px-5`} style={{ zIndex: 50 }}>
                    <ul className="text-lg flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <NavLink className="hover:text-gray-500" to="/" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/blogcreate" onClick={closeMenu}>Create Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/blog" onClick={closeMenu}>Blog View</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-gray-500" to="/profile" onClick={closeMenu}>Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <NavLink to="/login">
                        <div className="h-12 w-32 flex justify-center items-center">
                            <div className="relative inline-flex group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                </div>
                                <NavLink to="/login" title="Sign In"
                                    className={({ isActive }) => `relative inline-flex items-center justify-center px-4 py-1 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${isActive ? 'active' : ''}`}
                                    role="button">Sign In
                                </NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <IonIcon 
                        icon={menuName === 'menu' ? menuOutline : closeOutline} 
                        className="text-3xl cursor-pointer md:hidden" 
                        color="white" 
                        onClick={onToggleMenu}
                    />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
