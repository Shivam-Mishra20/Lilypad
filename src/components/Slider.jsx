import * as React from "react";
import '../App.css'
import { ChevronLeft, ChevronRight } from "lucide-react";
const Slider = ({ slides, className = "" }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
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
        <div className="relative h-[600px] w-full  text-black  overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={` absolute mx-20 inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="container flex  flex-col md:flex-row   mx-auto  h-full items-center">
                        <div className={`w-1/1 space-y-6   transform ${index === currentSlide ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500`}>
                            <h1 className=" text-2xl  md:text-6xl font-bold">{slide.title}</h1>
                            <p className=" text-xl md:text-2xl">
                                {slide.description}
                                <span className="block text-4xl font-bold">{slide.price}</span>
                            </p>
                            <p className="text-gray-600">{slide.financing}</p>
                            <div className="flex gap-4">
                                <button className="bg-[var(--lilypad-primary)] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                    Buy Now
                                </button>
                                <button className="  underline   px-6 py-2   hover:bg-gray-100 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className=" relative mt-[140px] md:mt-3 md:absolute right-0  md:top-1/2 -translate-y-1/2">
                            <img
                                src={slide.image}
                                alt="Electronic devices showcase"
                                className=" h-[250px]  md:h-[500px] w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    );
}

export default Slider;
