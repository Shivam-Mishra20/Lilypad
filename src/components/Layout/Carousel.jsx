import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from "swiper/modules";
import { slides } from "../../Data/Data";


const Carousel = () => {
    const textVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeIn" },
        },
    };

    const imageVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="relative font-raleway h-[200px]   sm:h-[400px] w-full bg-[#E6EBEF] dark:bg-black dark:text-white text-black overflow-hidden group">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                speed={600} // Smooth transition  
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <motion.div
                            className="container flex items-center justify-center h-full gap-3 px-3"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                    },
                                },
                            }}
                        >
                            <motion.div
                                className="text-start space-y-2 sm:space-y-4"
                                variants={textVariants}
                            >
                                <h1 className="text-xl text-nowrap text-cyan font-bold sm:text-2xl lg:text-6xl">
                                    {slide.title}
                                </h1>
                                <p className="text-xl font-normal hidden sm:block my-2 md:text-sm lg:text-2xl">
                                    {slide.description}
                                    <span className="block text-4xl font-bold">{slide.price}</span>
                                </p>
                                <p className="text-gray-600 hidden sm:block">{slide.financing}</p>
                                <div className="flex gap-4 justify-start">
                                    <button className="bg-cyan text-white font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
                                        Buy Now
                                    </button>
                                    <button className="underline hidden sm:block px-6 py-2 hover:bg-gray-100 transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative md:mt-3 mt-4"
                                variants={imageVariants}
                            >
                                <img

                                    src={slide.image}
                                    alt="Electronic devices showcase"
                                    className="h-[144px] sm:h-[250px] md:h-[300px] w-auto object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
                className="p-6 swiper-button-prev flex items-center justify-center    bg-gray-400 text-white rounded-full shadow-md hover:bg-gray-500 transition-colors opacity-0 sm:group-hover:opacity-100"
            >
            </div>
            <div

                className="p-6 swiper-button-next flex items-center justify-center    bg-gray-400 text-white rounded-full shadow-md hover:bg-gray-500 transition-colors opacity-0 sm:group-hover:opacity-100"

            >
            </div>
        </div>
    );
}

export default Carousel;
