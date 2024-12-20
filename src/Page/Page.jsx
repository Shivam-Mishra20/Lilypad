import { motion } from 'framer-motion'; // Importing Framer Motion
import BlogsCard from "../components/BlogsCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import Newslatter from "../components/Newslatter";
import ProductGrid from "../components/ProductGrid";
import ProductListing from "../components/ProductListing";
import ProductSlider from "../components/ProductSlider";
import Services from "../components/Services";
import Slider from "../components/Slider";
import MiniproductSlider from "../components/MiniproductSlider";
import PriceRange from "../components/PriceRange";
import { products, productsecond, slides, Brands, category } from "../Data/Data";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                {/* Slider */}
                <Section>
                    <Slider slides={slides} className="h-auto md:h-[600px] w-full bg-gray-200" />
                </Section>

                {/* Trending Brands */}
                <Section>
                    <MiniproductSlider data={Brands} title="Filter By Brands" hidden="hidden" />
                </Section>

                {/* Category */}
                <Section>
                    <MiniproductSlider data={category} title="Filter By Category" />
                </Section>

                {/* Price Range */}
                <Section>
                    <PriceRange />
                </Section>

                {/* Product Grid */}
                <Section>
                    <ProductGrid products={products} />
                </Section>

                {/* Product Slider */}
                <Section>
                    <ProductSlider />
                </Section>

                {/* Product Listing */}
                <Section>
                    <ProductListing />
                </Section>

                {/* Second Product Grid */}
                <Section>
                    <ProductGrid products={productsecond} />
                </Section>

                {/* Second Product Slider */}
                <Section>
                    <ProductSlider />
                </Section>

                {/* Services */}
                <Section>
                    <Services />
                </Section>

                {/* Blogs Card */}
                <Section>
                    <BlogsCard />
                </Section>

                {/* Newsletter */}
                <Section>
                    <Newslatter />
                </Section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

const Section = ({ children }) => (
    <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
        {children}
    </motion.div>
);

export default Page;
