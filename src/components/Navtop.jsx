import { ChevronDown, Search, ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navtop = () => {
    return (
        <div className="w-full bg-black border-b    pb-1 text-white px-10 py-2">
            <div className="container mx-auto flex items-center justify-between text-sm">
                <div className=" hidden md:flex items-center  gap-4">
                    <div className="flex items-center gap-1">
                        🇺🇸 English
                        <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className=" hidden md:flex items-center gap-1">
                        $ Currency
                        <ChevronDown className="h-4 w-4" />
                    </div>

                </div>
                <div className="text-center mx-auto">Free Shipping On All Orders Over $100</div>

                <div className="hidden md:flex items-center p-1 gap-4">
                    <Link className='  px-2 ' href="/account">My Account</Link>
                    <Link className=' border-x px-2 ' href="/compare">Compare</Link>
                    <Link href="/cart" className="flex   px-2 items-center gap-1">
                        <ShoppingCartIcon className="h-4 w-4" />
                        Cart (0)
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navtop;
