import React, { useState, useEffect } from "react";
import {
    Search,
    ChevronDown,
    ShoppingCartIcon,
    User,
    SearchCheck,
    AlignJustify,
    X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/Context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (categoryName) => {
        setActiveDropdown((prev) => (prev === categoryName ? null : categoryName));
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen((prev) => !prev);



    return (
        <nav
            className={`w-full bg-[#1D1E18] text-white px-4 lg:px-2 py-4 ${isFixed ? "fixed top-0 left-0 z-50 shadow-md" : ""}`}
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
                        <ul className="hidden lg:flex w-auto">
                            {categories.map((category, ind) => (
                                <NavigationMenu key={ind}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="flex py-2">
                                                <span className="text-[0.8rem]">{category.name}</span>
                                            </NavigationMenuTrigger>

                                            {/* Dropdown Menu */}
                                            {category.items.length > 0 && (
                                                <NavigationMenuContent>
                                                    <div className="bg-white z-[1000] dark:bg-gray-800 dark:text-cyan text-gray-800 border border-gray-300 shadow-lg rounded-md w-full max-w-[280px] md:max-w-[320px] min-w-[200px] max-h-[300px] overflow-y-auto">
                                                        <ul className="py-2">
                                                            {category.items.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="px-4 py-3 text-sm font-medium transition-all duration-200 dark:hover:bg-lightgray hover:bg-gray-300 hover:text-cyan-600 cursor-pointer"
                                                                >
                                                                    <NavigationMenuLink>
                                                                        <Link to={`/#${item}`} className="block w-full">
                                                                            {item}
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </NavigationMenuContent>
                                            )}
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className=" flex items-center justify-center flex-col w-full " >


                        <div className="flex  ">
                            <button
                                onClick={toggleMenu}
                                className="mr-2 lg:hidden focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                <X className="visible" />
                            </button>
                            <Link to="/" className="font-bold  w-auto   ">
                                <img src="/img/lilylogo.png" alt="Lily Logo" />
                            </Link>
                        </div>
                        <ul className="space-y-4 my-3 w-full">
                            {categories.map((category) => (
                                <li key={category.name} className="relative">
                                    <button
                                        onClick={() => toggleDropdown(category.name)}
                                        className="flex justify-between w-full py-2 px-4 text-left bg-gray-800 text-white rounded-lg"
                                    >
                                        {category.name}
                                        <ChevronDown
                                            className={`ml-2 h-4 w-4 transform text-gray-300 hover:text-white ${activeDropdown === category.name ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                    {activeDropdown === category.name && (
                                        <ul className="mt-2 space-y-2 pl-4">
                                            {category.items.map((item) => (
                                                <li key={item} className="text-gray-300">
                                                    <Link to={`/#${item}`} className="block hover:text-white">
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

                {/* //icons  */}
                {!menuOpen && (
                    <div className="flex lg:hidden items-center p-1 gap-2">
                        <SearchCheck className="h-5 w-5" />
                        <User className="h-5 w-5" />
                        <ShoppingCartIcon className="h-5 w-5" />
                        <div className="flex items-center cursor-pointer gap-2 sm:pr-3">
                            <span className="hidden sm:block">Light</span>
                            <Switch
                                checked={darkMode}
                                onCheckedChange={toggleTheme}
                                className={`relative inline-flex h-6    w-11 items-center rounded-full ${darkMode ? 'bg-cyan' : 'bg-lightgray'}`}
                            />
                            <span className="hidden sm:block">Dark</span>
                        </div>
                    </div>
                )}

                {/* Search Bar for Desktop */}
                <div className="relative hidden lg:block w-40 lg:w-auto xl:w-80">
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
