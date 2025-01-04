import { motion } from 'framer-motion'; // Importing Framer Motion

import Footer from './Footer';
import Navbar from './Navbar';
import Navtop from './Navtop';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col   h-screen">
            <Navtop />
            <Navbar />


            <main className="flex-grow ">
                {children}
            </main>

            <Footer />


        </div>
    );
};

export default Layout;
