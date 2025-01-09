import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Gift, Pen, MessageCircle } from 'lucide-react';


const MobileBottomFooter = () => {


    const navigation = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Categories', href: '/categories', icon: LayoutGrid },
        { name: 'Rewards', href: '/rewards', icon: Gift },
        { name: 'Personalisation', href: '/personalisation', icon: Pen },
        { name: 'Chat', href: '/chat', icon: MessageCircle },
    ];

    return (
        <nav className="sm:hidden fixed bottom-0   z-50 left-0 right-0   bg-white  dark:bg-black dark:text-white text-black  shadow-lg border-t-2 border-gray">
            <div className="flex justify-around  ">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className=
                            "group flex flex-col items-center gap-1 p-2 transition-all"


                        >
                            <Icon
                                className=
                                "w-6 h-6 relative  font-mono transition-colors group-hover:text-cyan"


                            />
                            <span
                                className=
                                "text-xs font-medium transition-colors group-hover:text-cyan"


                            >
                                {item.name}
                            </span>

                        </Link>
                    );
                })}
            </div>
        </nav >
    );
}


export default MobileBottomFooter
