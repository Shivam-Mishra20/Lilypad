import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Gift, Pen, MessageCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

export function FooterBottom() {
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Categories', href: '/categories', icon: LayoutGrid },
        { name: 'Rewards', href: '/rewards', icon: Gift },
        { name: 'Personalisation', href: '/personalisation', icon: Pen },
        { name: 'Chat', href: '/chat', icon: MessageCircle },
    ];

    return (
        <nav className="sm:hidden fixed bottom-0   z-50 left-0 right-0 bg-background shadow-lg border-t-2 border-gray">
            <div className="flex justify-around  ">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "group flex flex-col items-center gap-1 p-2 transition-all",

                            )}
                        >
                            <Icon
                                className={cn(
                                    "w-6 h-6 relative transition-colors group-hover:text-cyan",

                                )}
                            />
                            <span
                                className={cn(
                                    "text-xs font-medium transition-colors group-hover:text-cyan",

                                )}
                            >
                                {item.name}
                            </span>

                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
