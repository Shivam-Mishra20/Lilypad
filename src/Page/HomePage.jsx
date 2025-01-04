import { motion } from 'framer-motion'; // Importing Framer Motion
import { FooterBottom } from '@/components/FooterMobileMenu/FooterBotom';
import FilterByPrice from '@/components/FilterBy/FilterByPrice';
import FilterByCategory from '@/components/FilterBy/FilterByCategory';
import Carousel from '@/components/Layout/Carousel';
import Services from '@/components/Layout/Services';
import TrendingProducts from '@/components/TrendingProduct/TrendingProducts';
import FaqSec from '@/components/Faq/FaqSec';
import Blog_Sec from '@/components/BlogsSec/Blog_Sec';
import Layout from '@/components/Layout/Layout';
import FilterByBrands from '@/components/FilterBy/FilterByBrands';
import { faqData } from '@/Data/Data';
;



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
                <FilterByBrands />
            </Section>
            <Section>
                <FilterByCategory />
            </Section>
            <Section>
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
