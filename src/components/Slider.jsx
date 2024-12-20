import * as React from "react";
import '../App.css'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[200px]  sm:h-[400px]  w-full bg-[#E6EBEF]  text-black  overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={` absolute  mx-2   sm:mx-20  inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="container flex  justify-between sm:justify-center w-full sm:gap-8 mt-4  px-4  mx-2   sm:mx-auto  h-full items-center">
                        <div className={`w-1/1   space-y-2  sm:space-y-6   transform ${index === currentSlide ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500`}>
                            <h1 className=" text-xl sm:text-2xl text-nowrap  lg:text-6xl font-bold">{slide.title}</h1>
                            <p className=" text-xl   hidden sm:block  md:text-sm lg:text-2xl">
                                {slide.description}
                                <span className="block text-4xl font-bold">{slide.price}</span>
                            </p>
                            <p className="text-gray-600 hidden  sm:block  ">{slide.financing}</p>
                            <div className="flex gap-4">
                                <button className="bg-[var(--lilypad-primary)] text-white  px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                    Buy Now
                                </button>
                                <button className="  underline  hidden sm:block   px-6 py-2   hover:bg-gray-100 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className=" relative    md:mt-3  ">
                            <img
                                src={slide.image}
                                alt="Electronic devices showcase"
                                className=" h-[144px] sm:h-[250px]  md:h-[300px]  w-full  md:w-auto object-fill"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <button
                onClick={prevSlide}
                className="absolute hidden sm:block left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute hidden sm:block right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    );
}

export default Slider;
