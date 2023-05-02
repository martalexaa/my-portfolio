import React from "react";
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="py-3 lg:mb-12 flex justify-end lg:mr-5 bg-gray-600 opacity-80 fixed top-0 w-full z-10" >
            <ul className={`lg:flex text-white drop-shadow-lg opacity-100 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className="mr-6">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer text-xl"
                        onClick={handleMenuItemClick}>
                        HOME
                    </Link>
                </li>
                <li className="mr-6">
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer text-xl"
                        onClick={handleMenuItemClick}>
                        ABOUT
                    </Link>
                </li>
                <li className="mr-6">
                    <Link to="work" smooth={true} duration={500} className="cursor-pointer text-xl"
                        onClick={handleMenuItemClick}>
                        WORK
                    </Link>
                </li>
                <li className="mr-6">
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-xl"
                        onClick={handleMenuItemClick}>
                        CONTACT
                    </Link>
                </li>
            </ul>
            <div id="hamburger" className="flex pr-2 lg:hidden" onClick={handleMenuToggle}>
                <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;