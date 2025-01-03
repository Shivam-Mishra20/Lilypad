import { motion } from 'framer-motion'; // Importing Framer Motion

import { slides, Brands, category, faqData, PriceRange } from "../Data/Data";

import Services from '../components/Layout/Services';

import TrendingProducts from '../components/TrendingProduct/TrendingProducts';
import Carousel from '../components/Layout/Carousel';
import FilterBy from '../components/FilterBy/FilterBy';
import Layout from '../components/Layout/Layout';

import Blog_Sec from '../components/BlogsSec/Blog_Sec';
import FaqSec from '@/components/Faq/FaqSec';

import { FooterBottom } from '@/components/FooterMobileMenu/FooterBotom';
import FilterByPrice from '@/components/FilterBy/FilterByPrice';



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
                <Carousel />
            </Section>

            {/* Services */}
            <Section>
                <Services />
            </Section>

            {/*  filter  by */}
            <Section>
                <FilterBy data={Brands} title="Filter By Brands" hidden="hidden" />
            </Section>
            <Section>
                <FilterBy data={category} title="Filter By Category" />
            </Section>
            <Section>
                <FilterByPrice data={PriceRange} title="Filter By Price" />
            </Section>

            {/* Trending sec*/}
            <Section>
                <TrendingProducts />
            </Section>

            {/* Faq sec*/}
            <Section>
                <FaqSec faqData={faqData} />
            </Section>


            {/* Blogs sec */}
            <Section>
                <  Blog_Sec />
            </Section>

            {/*  bottom foooter for mobile */}

            <Section>
                <FooterBottom />
            </Section>


        </Layout>
    );
};

export default HomePage;
