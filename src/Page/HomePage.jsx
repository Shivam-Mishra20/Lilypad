import { motion } from 'framer-motion'; // Importing Framer Motion

import { slides, Brands, category, faqData } from "../Data/Data";



import Services from '../components/Layout/Services';

import TrendingProducts from '../components/TrendingProduct/TrendingProducts';
import Carousel from '../components/Layout/Carousel';
import FilterBy from '../components/FilterBy/FilterBy';
import Layout from '../components/Layout/Layout';
import ProductGrid from '../components/ProductsSec/ProductGrid';
import Blog_Sec from '../components/BlogsSec/Blog_Sec';
import FaqSec from '@/components/Faq/FaqSec';
import TribeVideo from '@/components/TribeVideoSec/VideoCard';
import TribeSec from '@/components/TribeVideoSec/TribeSec';
import { FooterBottom } from '@/components/FooterMobileMenu/FooterBotom';



// motion fadeing 

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

//use some motion for animateing 
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

const HomePage = () => {
    return (
        <Layout>
            {/* Slider */}
            <Section>
                <Carousel slides={slides} />
            </Section>

            {/* Services */}
            <Section>
                <Services />
            </Section>



            {/*  Brands */}
            <Section>
                <FilterBy data={Brands} title="Filter By Brands" hidden="hidden" />
            </Section>

            {/* Trending sec*/}
            <Section>
                <TrendingProducts />
            </Section>

            {/* videos sec*/}
            <Section>
                <TribeSec />
            </Section>

            {/* Productcard sec */}
            <Section>
                <ProductGrid />
            </Section>

            {/* Faq sec*/}
            <Section>
                <FaqSec faqData={faqData} />
            </Section>


            {/* Blogs sec */}
            <Section>
                <  Blog_Sec />
            </Section>

            <Section>
                <FooterBottom />
            </Section>


        </Layout>
    );
};

export default HomePage;
