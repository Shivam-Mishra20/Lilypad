import { useEffect, useState } from 'react';

import { ChevronDown, ShoppingCartIcon, Sun, SunMoon, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/Context/ThemeContext';

const Navtop = () => {

    const { darkMode, setDarkMode } = useTheme();




    return (
        <div className="w-full bg-[#1D1E18] border-b hidden sm:block   pl-2  pb-1 text-white  py-2">
            <div className="  w-full   flex items-center justify-between text-sm">
                <div className=" hidden md:flex items-center  gap-4">
                    <div className="flex items-center gap-1">
                        English
                        <ChevronDown className="h-4 w-4" />
                    </div>
                    <div
                        className="hidden md:flex items-center cursor-pointer gap-1 border-r pr-3"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? (
                            < SunMoon className="h-6 w-6 text-yellow-400" /> // Sun icon for dark mode
                        ) : (
                            < Sun className="h-6 w-6" /> // Moon icon for light mode
                        )}
                    </div>
                    <div className="text-center    ">Discount on $100 </div>

                </div>


                <div className="hidden md:flex items-center p-1 gap-4">
                    <Link className='  px-2 ' href="/account">My Account</Link>
                    <Link className=' border-x px-2 ' href="/compare">Compare</Link>
                    <Link href="/cart" className="flex   px-2 items-center gap-1">
                        <ShoppingCartIcon className="h-4 w-4" />
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navtop;
