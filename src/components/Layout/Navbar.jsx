import React, { useState, useEffect } from "react";
import {
    Search,
    ChevronDown,
    ShoppingCartIcon,
    User,
    SearchCheck,
    AlignJustify,
    SunMoon,
    Sun,

} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/Context/ThemeContext";



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
    const [isFixed, setIsFixed] = useState(false);
    const { darkMode, setDarkMode } = useTheme();
    const [openDropdown, setOpenDropdown] = useState(null);


    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (index) => {
        clearTimeout(window.leaveTimeout);
        setOpenDropdown(index);
    };

    const handleMouseLeave = () => {
        window.leaveTimeout = setTimeout(() => setOpenDropdown(null), 200);
    };

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <nav
            className={`w-full bg-[#1D1E18] text-white px-4 lg:px-2 py-4 ${isFixed ? "fixed top-0 left-0 z-50 shadow-md" : ""
                }`}
        >
            <div className="flex items-center justify-between">
                {/* Logo and Hamburger Menu */}
                {!menuOpen && (
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="mr-2 lg:hidden focus:outline-none"
                        >
                            <AlignJustify />
                        </button>
                        <Link to="/" className="text-2xl font-bold w-[160px] flex items-center">
                            <img src="/img/lilylogo.png" alt="Lily Logo" />
                        </Link>

                        {/* Navigation Links */}
                        <ul className="hidden lg:flex md:ml-6 lg:ml-4 lg:space-x-6">
                            {categories.map((category, index) => (
                                <li
                                    key={category.name}
                                    className="text-xs md:text-[12px] group    relative"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        className="flex items-center space-x-1 py-2"
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === index ? null : index)
                                        }
                                    >
                                        <span className="relative">
                                            {category.name}
                                            {category.items.length > 0 && (
                                                <span className="absolute -bottom-1 left-0 w-full hidden h-0.5 bg-cyan transition-all group-hover:block"></span>
                                            )}
                                        </span>
                                        {category.items.length > 0 && (
                                            <div className="relative">
                                                <ChevronDown
                                                    className={`h-4 w-4 transform transition-transform duration-300 ${openDropdown === index ? "rotate-180" : "rotate-0"
                                                        }`}
                                                />
                                            </div>
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {category.items.length > 0 && (
                                        <ul
                                            className={`absolute bg-white text-black border border-gray-700 mt-4 shadow-md py-2 w-48 z-10 transition-opacity duration-300 ${openDropdown === index ? "opacity-100 block" : "opacity-0 hidden"
                                                }`}
                                        >
                                            {category.items.map((item) => (
                                                <li key={item}>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                    >
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

                {/* Mobile Menu */}
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
                            {categories.map((category, index) => (
                                <li
                                    key={category.name}
                                    className="text-xs md:text-sm my-3 border-b  group relative"
                                    onMouseEnter={() => handleMouseEnter(index)}

                                >
                                    <button
                                        className="flex items-center space-x-1 py-2"
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === index ? null : index)
                                        }
                                    >
                                        <span className="relative">
                                            {category.name}
                                            {category.items.length > 0 && (
                                                <span className="absolute -bottom-1 left-0 w-full hidden h-0.5 bg-cyan transition-all group-hover:block"></span>
                                            )}
                                        </span>
                                        {category.items.length > 0 && (
                                            <div className="relative">
                                                <ChevronDown
                                                    className={`h-4 w-4 transform transition-transform duration-300 ${openDropdown === index ? "rotate-180" : "rotate-0"
                                                        }`}
                                                />
                                            </div>
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {category.items.length > 0 && (
                                        <ul
                                            className={`absolute  right-0   bg-white text-black border border-gray-700 mt-4 shadow-md py-2  w-52 z-10 transition-opacity duration-300 ${openDropdown === index ? "opacity-100 block" : "opacity-0 hidden"
                                                }`}
                                        >
                                            {category.items.map((item) => (
                                                <li key={item}>
                                                    <Link
                                                        to={'/'}
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
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
                            <SunMoon
                                className="h-6 w-6 text-yellow-400 cursor-pointer"
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        ) : (
                            <Sun
                                className="h-6 w-6 cursor-pointer"
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        )}
                    </div>
                )}

                {/* Search Bar for Desktop */}
                <div className="relative hidden lg:block w-40 lg:w-50 xl:w-80">
                    <input
                        type="search"
                        placeholder="Search Product Here..."
                        className="w-full bg-white dark:bg-black dark:border-white dark:border dark:text-white text-black pl-4 pr-10 py-2 rounded-full"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
