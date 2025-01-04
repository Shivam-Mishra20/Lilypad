import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Brands as data } from '@/Data/Data'

const BrandsTile = () => {
    const showNavigation = data.length > 8;

    return (
        <Swiper
            modules={showNavigation ? [Navigation, Pagination, Autoplay] : [Pagination, Autoplay]}
            slidesPerView={7}
            spaceBetween={10}
            slidesPerGroup={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            speed={1000}

            className="swiper-container"
            breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 15 },
                350: { slidesPerView: 3, spaceBetween: 15 },
                640: { slidesPerView: 4, spaceBetween: 15 },
                1024: { slidesPerView: 7, spaceBetween: 20 },
                1280: { slidesPerView: 7, spaceBetween: 10 },
            }}

        >
            {data.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                    <Link to={`/${index}`}>

                        <div className="my-8 flex items-center justify-center w-full mx-auto">
                            <div className="p-1 md:p-4 w-[80px] h-[80px] sm:w-[119px] sm:h-[119px] text-center dark:bg-[#00FFFF] bg-[#F7F7F7]   shadow-lg rounded-lg flex items-center justify-center mb-2 group transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                                />
                            </div>
                        </div>
                    </Link>



                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BrandsTile;
