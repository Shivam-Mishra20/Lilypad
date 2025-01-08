import { useEffect, useState } from 'react';
import { ChevronDown, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/Context/ThemeContext';
import { Switch } from "@/components/ui/switch"



const Navtop = () => {
    const { darkMode, setDarkMode } = useTheme();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="w-full bg-[#1D1E18] border-b hidden lg:block pl-2 pb-1 text-white py-2">
            <div className="w-full flex items-center justify-between text-sm">
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        English
                        <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="hidden md:flex items-center cursor-pointer gap-2 border-r pr-3">
                        <span className="ml-2">
                            light
                        </span>
                        <Switch
                            checked={darkMode}
                            onCheckedChange={toggleTheme}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-cyan ' : 'bg-lightgray '
                                }`}
                        >

                        </Switch>
                        <span className="">
                            Dark
                        </span>
                    </div>
                    <div className="text-center">Discount on $100</div>
                </div>

                <div className="hidden md:flex items-center p-1 gap-4">
                    <Link className="px-2" href="/account">My Account</Link>
                    <Link className="border-x px-2" href="/compare">Compare</Link>
                    <Link href="/cart" className="flex px-2 items-center gap-1">
                        <ShoppingCartIcon className="h-4 w-4" />
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navtop;
