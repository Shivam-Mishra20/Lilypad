import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (


        <footer className="bg-black dark:border-t-2 border-cyan w-full  text-white px-6 ">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="space-y-4">
                        <Link to="/" className="block">
                            <h1 className="text-[#40E0D0] text-3xl font-bold">LILYPAD</h1>
                        </Link>
                        <p className="text-white/80">Accelerate. Sustainable. Energy.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <Link to="/why-lilypad" className="block hover:text-[#40E0D0] transition-colors">
                            Why Lilypad
                        </Link>
                        <Link to="/our-story" className="block hover:text-[#40E0D0] transition-colors">
                            Our Story
                        </Link>
                        <Link to="/contact" className="block hover:text-[#40E0D0] transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <Link to="/privacy" className="block hover:text-[#40E0D0] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="block hover:text-[#40E0D0] transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 className="font-medium">Social Media</h3>
                        <div className="flex gap-4">
                            <Link
                                to="/"
                                className="hover:text-[#40E0D0] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#40E0D0] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#40E0D0] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#40E0D0] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-2 border-t border-white/10 text-center text-sm text-white/60">
                    © 2024 LilyPad. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
