import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperWithItems = ({ data, hidden }) => {
    const showNavigation = data.length > 8;

    return (
        <Swiper
            modules={showNavigation ? [Navigation, Pagination, Autoplay] : [Pagination, Autoplay]}
            slidesPerView={8}
            spaceBetween={10}
            slidesPerGroup={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            className="swiper-container"
            breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 15 },
                350: { slidesPerView: 3, spaceBetween: 15 },
                640: { slidesPerView: 4, spaceBetween: 15 },
                1024: { slidesPerView: 6, spaceBetween: 20 },
                1280: { slidesPerView: 9, spaceBetween: 10 },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                    <div className="my-8 w-full mx-auto  ">
                        <div className="p-4 w-[80px] h-[80px] sm:w-[119px] text-center sm:h-[119px] dark:bg-gray-800 bg-[#F7F7F7]  align-super shadow-md rounded-lg flex items-center justify-center mb-2 group">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className={`text-center mx-auto ${hidden}`}>
                            <h6 className="mr-3 text-sm font-raleway font-normal text-darkGray">
                                {item.name}
                            </h6>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperWithItems;
