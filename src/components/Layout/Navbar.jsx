import React, { useState, useEffect } from "react";
import { Search, ChevronDown, ShoppingCartIcon, User, SearchCheck, AlignJustify, SunMoon, Sun } from 'lucide-react';
import { Link } from "react-router-dom";
import '../../App.css';

const categories = [
    {
        name: "Electric Motorcycle",
        items: ["Mountain E-Bikes", "City E-Bikes", "Folding E-Bikes", "Cargo E-Bikes"],
    },
    {
        name: "Highspeed scooter",
        items: ["Electric Scooters", "Eco Scooters", "Sport Scooters", "Folding Scooters"],
    },
    {
        name: "Low Speed Scooter",
        items: ["Urban Electric Cycles", "Hybrid Cycles", "Commuter Cycles", "Performance Cycles"],
    },
    {
        name: "E-cycles",
        items: ["Helmets", "Bike Locks", "Lights", "Charging Stations"],
    },
    {
        name: "Others",
        items: ["Replacement Batteries", "Motors", "Tires", "Brakes"],
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isFixed, setIsFixed] = useState(false);


    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        // Check if the user prefers dark mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            // Check user's system preference
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);


    useEffect(() => {
        // Toggle the dark class based on state
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    let leaveTimeout;

    const handleMouseEnter = (index) => {
        clearTimeout(leaveTimeout);
        setOpenDropdown(index);
    };

    const handleMouseLeave = () => {
        leaveTimeout = setTimeout(() => {
            setOpenDropdown(null);
        }, 200);
    };

    const handleToggleClick = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (




        <nav className={`w-full bg-[#1D1E18] text-white  px-4  lg:px-4 py-4 ${isFixed ? "fixed top-0 left-0 z-50 shadow-md" : ""}`}>

            <div className="container flex items-center justify-between">
                {/* Logo and Hamburger Menu */}
                {!menuOpen && (
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="mr-2 lg:hidden focus:outline-none"
                        >
                            <AlignJustify className="visible" />
                        </button>
                        <Link to="/" className="text-2xl font-bold w-[160px] flex items-center">
                            <img src="/img/lilylogo.png" alt="Lily Logo" />
                        </Link>

                        {/* navlinks */}
                        <ul className={`hidden lg:flex md:ml-6 lg:ml-4 lg:space-x-6`}>
                            {categories.map((category, index) => (
                                <li
                                    key={category.name}
                                    className="text-xs md:text-sm group relative"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <button
                                        className="flex items-center space-x-1 py-2"
                                        onClick={() => handleToggleClick(index)}
                                    >
                                        <div className="relative">
                                            {category.name}
                                            {category.items.length > 0 && (
                                                <span className="absolute -bottom-1 left-0 w-full hidden h-0.5 bg-cyan transition-all group-hover:block"></span>
                                            )}
                                        </div>
                                        {category.items.length > 0 && <ChevronDown className="h-4 w-4" />}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {category.items.length > 0 && (
                                        <ul
                                            className={`absolute bg-white text-black border border-gray-700 mt-4 shadow-md py-2 w-48 z-10 transition-opacity duration-300 ${openDropdown === index ? "opacity-100 block" : "opacity-0 hidden"}`}
                                        >
                                            {category.items.map((item) => (
                                                <li key={item}>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Separate Mobile Menu */}
                {menuOpen && (
                    <div className="flex w-full flex-col">
                        <div className="flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="mr-2 lg:hidden z-50 focus:outline-none"
                            >
                                <AlignJustify className="visible" />
                            </button>
                            <Link to="/" className="text-2xl font-bold w-[160px] flex items-center">
                                <img src="/img/lilylogo.png" alt="Lily Logo" />
                            </Link>
                        </div>

                        <ul className="block lg:hidden w-full text-white">
                            {categories.map((category) => (
                                <li key={category.name} className="py-3 text-xs border-b border-gray-500 md:text-sm group relative">
                                    <button className="flex items-center space-x-1 py-2">
                                        <span className="relative">
                                            {category.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--lilypad-primary)] transition-all group-hover:w-full"></span>
                                        </span>
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                    <ul className="absolute hidden group-hover:block bg-white text-black border border-gray-700 mt-2 py-2 w-48 z-10">
                                        {category.items.map((item) => (
                                            <li key={item}>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Icons for Mobile */}
                {!menuOpen && (
                    <div className="flex lg:hidden items-center p-1 gap-2">
                        <SearchCheck className="h-5 w-5" />
                        <User className="h-5 w-5" />
                        <ShoppingCartIcon className="h-5 w-5" />
                        {darkMode ? (
                            < SunMoon className="h-6 w-6 text-yellow-400" onClick={() => setDarkMode(!darkMode)} />
                        ) : (
                            < Sun className="h-6 w-6  " onClick={() => setDarkMode(!darkMode)} />
                        )}
                    </div>
                )}

                {/* Search Bar for Desktop */}
                <div className="relative hidden lg:block w-40 lg:w-50 xl:w-80">
                    <input
                        type="search"
                        placeholder="Search Product Here..."
                        className="w-full bg-white text-black pl-4 pr-10 py-2 rounded-full"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
