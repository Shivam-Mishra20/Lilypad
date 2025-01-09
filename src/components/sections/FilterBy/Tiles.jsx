import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Tiles = ({ data, hidden, delay }) => {
    const showNavigation = data.length > 8;

    return (
        <Swiper
            modules={showNavigation ? [Navigation, Pagination, Autoplay] : [Pagination, Autoplay]}
            slidesPerView={7}
            spaceBetween={10}
            slidesPerGroup={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: `${delay}`, disableOnInteraction: true }}
            className="swiper-container"
            speed={900}
            breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 15 },
                350: { slidesPerView: 3, spaceBetween: 15 },
                640: { slidesPerView: 4, spaceBetween: 15 },
                1024: { slidesPerView: 7, spaceBetween: 10 },
                1280: { slidesPerView: 7, spaceBetween: 10 },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={item.id || index}>

                    <Link to={`/${item.name}`}>

                        <div className="my-8 flex items-center    flex-col  w-full   ">
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="p-1 sm:p-4  w-[80px] h-[80px] sm:w-[119px] border border-black text-center sm:h-[119px] dark:bg-[#5CFFFF]   dark:border dark:border-white   bg-[#F7F7F7]  align-super shadow-md rounded-lg flex items-center justify-center mb-2 group transition-transform transform hover:scale-105 hover:shadow-2xl">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <span>{item.name}</span>
                                </TooltipContent>
                                {hidden ? "" :
                                    <div className={` text-center  `}>
                                        <h6 className=" dark:text-white text-[0.6rem] sm:text-[0.8rem] text-nowrap  font-raleway font-normal text-darkGray">
                                            {item.name}
                                        </h6>
                                    </div>
                                }
                            </Tooltip>
                        </div>
                    </Link>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Tiles;
