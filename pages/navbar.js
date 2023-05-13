import React from "react";
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [navbar, setNavbar] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState("");

    return (
        <nav className="bg-black shadow top-0 z-50 fixed w-full">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="home" smooth={true} duration={500}>
                            <h2 className="text-2xl text-white font-bold cursor-pointer">| M K |</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="fixed top-2 right-0 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <div className="items-center justify-center md:flex md:space-x-6 md:space-y-0 divide-y md:divide-y-0">
                            <div className="text-white cursor-pointer text-lg md:text-2xl p-3 hover:text-gray-200">
                                <Link to="home" smooth={true} duration={500}
                                    onClick={() => setNavbar(false)}>
                                    <div classname="mx-100 my-2">
                                        Home
                                    </div>
                                </Link>
                            </div>
                            <div className="text-white cursor-pointer text-lg md:text-2xl p-3 hover:text-gray-200">
                                <Link to="about" smooth={true} duration={500} onClick={() => setNavbar(false)}>
                                    <div classname="mx-100 my-2">
                                        About
                                    </div>
                                </Link>
                            </div>
                            <div className="text-white cursor-pointer text-lg md:text-2xl p-3 hover:text-gray-200">
                                <Link to="work" smooth={true} duration={500} onClick={() => setNavbar(false)}>
                                    <div classname="mx-100 my-2">
                                        Projects
                                    </div>
                                </Link>
                            </div>
                            <div className="text-white cursor-pointer text-lg md:text-2xl p-3 hover:text-gray-200">
                                <Link to="contact" smooth={true} duration={500} onClick={() => setNavbar(false)}>
                                    <div classname="mx-100 my-2">
                                        Contact
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;