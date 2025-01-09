import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from "swiper/modules";
import { slides } from "@/Data/Data";
import { Button } from "@/components/ui/button";


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
        <div className="relative font-raleway h-[200px]   sm:h-[400px] w-full bg-[#bdbec0] dark:bg-black dark:text-white  overflow-hidden group">
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
                speed={700} // Smooth transition  
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
                                <h1 className="text-[1.2rem]  text-lightgray text-nowrap dark:text-cyan font-bold sm:text-3xl lg:text-5xl">
                                    {slide.title}
                                </h1>

                                <p className="text-xl font-normal  dark:text-white hidden sm:block my-2 md:text-sm lg:text-xl">
                                    {slide.description}
                                    <span className="block text-4xl font-bold">{slide.price}</span>
                                </p>
                                <p className="text-gray-600 hidden dark:text-white sm:block">{slide.financing}</p>
                                <div className="flex gap-4 justify-start">
                                    <Button className="bg-lightgray text-white dark:text-white font-semibold dark:bg-cyan   px-4 sm:px-6 py-2 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-bgGray hover:text-black transition-colors">
                                        Buy Now
                                    </Button>
                                    <Button className="underline hidden sm:block px-6 py-2 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded-sm transition-colors">
                                        Learn More
                                    </Button>
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative md:mt-3 mt-4"
                                variants={imageVariants}
                            >
                                <img

                                    src={slide.image}
                                    alt="Electronic devices showcase"
                                    className="h-[144px] sm:h-[250px] md:h-[300px] w-auto sm:max-w-[250px] object-contain"
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
