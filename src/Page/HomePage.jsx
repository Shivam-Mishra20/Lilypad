import { motion } from 'framer-motion'; // Importing Framer Motion

import FilterByPrice from '@/components/sections/FilterBy/FilterByPrice';
import FilterByCategory from '@/components/sections/FilterBy/FilterByCategory';
import Carousel from '@/components/ui/Carousel';
import Services from '@/components/ui/Services';
import TrendingProducts from '@/components/sections/TrendingProduct/TrendingProducts';
import FaqSec from '@/components/sections/Faq/FaqSec';
import Blog_Sec from '@/components/sections/BlogsSec/Blog_Sec';
import Layout from '@/components/Layout/Layout';
import FilterByBrands from '@/components/sections/FilterBy/FilterByBrands';
import { faqData } from '@/Data/Data';
import MobileBottomFooter from '@/components/Layout/MobileBottomFooter';

// motion fadeing 

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }
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
                <FilterByBrands />
                <FilterByCategory />



                <FilterByPrice />
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
                < Blog_Sec />
            </Section>

            {/*  bottom foooter for mobile */}

            <MobileBottomFooter />


        </Layout>
    );
};

export default HomePage;
