import { motion } from 'framer-motion'; // Importing Framer Motion
import BlogsCard from "../components/BlogsCard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Navtop from "../components/Navtop"
import Newslatter from "../components/Newslatter"
import ProductGrid from "../components/ProductGrid"
import ProductListing from "../components/ProductListing"
import ProductSlider from "../components/ProductSlider"
import Services from "../components/Services"
import Slider from "../components/Slider"
import TrendingProducts from "../components/TrendingProducts"
import { products, productsecond, slides } from "../Data/Data"

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navtop />
            <Navbar />

            {/* Main Content - Scrollable section */}
            <main className="flex-grow">
                {/* Slider */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggers animation when the element comes into view
                >
                    <Slider slides={slides} className="h-[600px] w-full bg-gray-200" />
                </motion.div>

                {/* Trending Products */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <TrendingProducts />
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <ProductGrid products={products} />
                </motion.div>

                {/* Product Slider */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <ProductSlider />
                </motion.div>

                {/* Product Listing */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <ProductListing />
                </motion.div>

                {/* Second Product Grid */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <ProductGrid products={productsecond} />
                </motion.div>

                {/* Second Product Slider */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <ProductSlider />
                </motion.div>

                {/* Services */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <Services />
                </motion.div>

                {/* Blogs Card */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <BlogsCard />
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggering animation on scroll into view
                >
                    <Newslatter />
                </motion.div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Page;
