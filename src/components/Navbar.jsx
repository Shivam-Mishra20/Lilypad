import React, { useState } from "react";
import { Search, ChevronDown, ShoppingCartIcon, User, SearchCheck, AlignJustify } from 'lucide-react';
import { Link } from "react-router-dom";
import '../App.css'
const categories = [
    {
        name: "Electric Bikes",
        items: ["Mountain E-Bikes", "City E-Bikes", "Folding E-Bikes", "Cargo E-Bikes"],
    },
    {
        name: "Scooters",
        items: ["Electric Scooters", "Eco Scooters", "Sport Scooters", "Folding Scooters"],
    },
    {
        name: "Electric Cycles",
        items: ["Urban Electric Cycles", "Hybrid Cycles", "Commuter Cycles", "Performance Cycles"],
    },
    {
        name: "Accessories",
        items: ["Helmets", "Bike Locks", "Lights", "Charging Stations"],
    },
    {
        name: "Batteries & Parts",
        items: ["Replacement Batteries", "Motors", "Tires", "Brakes"],
    },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="w-full bg-[#1D1E18] text-white px-4 md:px-10 py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Hamburger Menu */}
                {!menuOpen && (
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="mr-2 md:hidden focus:outline-none"
                        >
                            <AlignJustify className="visible" />
                        </button>
                        <Link to="/" className="text-2xl font-bold w-[160px] flex items-center">
                            <img src="/img/lilylogo.png" alt="Lily Logo" />
                        </Link>
                    </div>)}


                {/* Navbar Links */}
                <ul className={`hidden md:flex mx-2 md:space-x-6`}>
                    {categories.map((category) => (
                        <li key={category.name} className="group relative">
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
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                {/* Separate Mobile Menu */}
                {menuOpen && (
                    <ul className="block md:hidden w-full bg-[#1D1E18] text-white">
                        {categories.map((category) => (
                            <li key={category.name} className="border-b border-gray-600">
                                <button className="w-full text-left px-4 py-3">
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}


                {/* Icons for Mobile */}
                {!menuOpen && (
                    <div className="flex md:hidden items-center p-1 gap-2">
                        <SearchCheck className="h-4 w-4" />
                        <User className="h-4 w-4" />
                        <ShoppingCartIcon className="h-4 w-4" />
                    </div>

                )}


                {/* Search Bar for Desktop */}
                <div className="relative hidden md:block w-80">
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

export default Navbar