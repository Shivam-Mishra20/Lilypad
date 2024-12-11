import { Rss, ArrowUp, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-100 py-8">

            <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-700 pb-8">
                    <div className="flex items-center gap-3">
                        <ArrowUp className="w-6 h-6" />
                        <h2 className="text-xl font-semibold">Sign Up For Newsletter</h2>
                    </div>
                    <div className="flex-1  items-center max-w-xl">
                        <p className="text-zinc-300  mb-2">Get 30% discount on your next purchase.</p>
                        <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="flex-1 bg-transparent px-4 py-2 outline-none text-white"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Contact Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <p className="text-zinc-400 text-sm mb-2">123 EV Boulevard, Electric City, EC 12345, United States</p>
                        <p className="text-zinc-400 text-sm mb-2">(+1) 555-123-4567</p>
                        <p className="text-zinc-400 text-sm mb-4">support@evbikes.com</p>
                        <div className="flex gap-3">

                        </div>
                    </div>

                    {/* My Account */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">My Account</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white">My Account</Link></li>
                            <li><Link href="#" className="hover:text-white">Order History</Link></li>
                            <li><Link href="#" className="hover:text-white">Wish List</Link></li>
                            <li><Link href="#" className="hover:text-white">Affiliates</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Information</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white">About Electric Bikes</Link></li>
                            <li><Link href="#" className="hover:text-white">Charging Stations</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-white">EV News Blog</Link></li>
                        </ul>
                    </div>

                    {/* Extras */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Extras</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white">Site Map</Link></li>
                            <li><Link href="#" className="hover:text-white">Newsletter</Link></li>
                            <li><Link href="#" className="hover:text-white">EV Brands</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Special Offers</Link></li>
                        </ul>
                    </div>

                    {/* Our App */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our App</h3>
                        <p className="text-sm text-zinc-400 mb-4">
                            Download Our Apps And Get Extra 15% Discount On Your First Order..!
                        </p>
                        <div className="flex flex-col gap-2">
                            <Link href="#">
                                <img
                                    src="/img/svgs/play.svg"
                                    alt="Get it on Google Play"
                                    width={35}
                                    height={40}
                                    className="rounded"
                                />
                            </Link>
                            <Link href="#">
                                <img
                                    src="/img/svgs/apple.svg"
                                    alt="Download on the App Store"
                                    width={35}
                                    height={40}
                                    className="rounded"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-700 text-sm text-zinc-400">
                    <p>Powered By EVBikes Store © 2024</p>
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <img
                            src="/img/svgs/insta.svg"
                            alt="Mastercard"
                            width={45}
                            height={30}
                            className="rounded"
                        />
                        <img
                            src="/img/svgs/fb.svg"
                            alt="Visa"
                            width={45}
                            height={30}
                            className="rounded"
                        />
                        <img
                            src="/img/svgs/linkedin.svg"
                            alt="PayPal"
                            width={45}
                            height={30}
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer