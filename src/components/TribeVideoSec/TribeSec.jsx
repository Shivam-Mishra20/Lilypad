import React from 'react';
import VideoCard from './VideoCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const bikes = [
    { id: 1, imageSrc: "/vd/vd1.mp4", title: "EV Bike", price: 899, oldPrice: 3990, discount: "77% off", thumbnail: "/img/Bike/bike3.webp" },
    { id: 2, imageSrc: "/vd/vd2.mp4", title: "EV Bike", price: 1099, oldPrice: 3990, discount: "73% off", thumbnail: "/img/Bike/bike6.webp" },
    { id: 3, imageSrc: "/vd/vd3.mp4", title: "EV Bike", price: 1299, oldPrice: 4990, discount: "74% off", thumbnail: "/img/Bike/bike4.webp" },
    { id: 4, imageSrc: "/vd/vd4.mp4", title: "EV Bike", price: 899, oldPrice: 3990, discount: "77% off", thumbnail: "/img/Bike/evv.webp" },
    { id: 5, imageSrc: "/vd/vd5.mp4", title: "EV Bike", price: 1099, oldPrice: 3990, discount: "73% off", thumbnail: "/img/Bike/bike6.webp" },
    { id: 6, imageSrc: "/vd/vd6.mp4", title: "EV Bike", price: 1299, oldPrice: 4990, discount: "74% off", thumbnail: "/img/Bike/oxo.webp" },
    { id: 7, imageSrc: "/vd/vd1.mp4", title: "EV Bike", price: 899, oldPrice: 3990, discount: "77% off", thumbnail: "/img/Bike/bike3.webp" },
    { id: 8, imageSrc: "/vd/vd2.mp4", title: "EV Bike", price: 1099, oldPrice: 3990, discount: "73% off", thumbnail: "/img/Bike/bike6.webp" },
    { id: 9, imageSrc: "/vd/vd3.mp4", title: "EV Bike", price: 1299, oldPrice: 4990, discount: "74% off", thumbnail: "/img/Bike/bike4.webp" },
    { id: 10, imageSrc: "/vd/vd4.mp4", title: "EV Bike", price: 899, oldPrice: 3990, discount: "77% off", thumbnail: "/img/Bike/evv.webp" },
    { id: 11, imageSrc: "/vd/vd5.mp4", title: "EV Bike", price: 1099, oldPrice: 3990, discount: "73% off", thumbnail: "/img/Bike/bike6.webp" },
    { id: 12, imageSrc: "/vd/vd6.mp4", title: "EV Bike", price: 1299, oldPrice: 4990, discount: "74% off", thumbnail: "/img/Bike/oxo.webp" },
];

const TribeSec = () => {
    return (
        <div className="w-[94%] my-6 mx-auto">
            <h1 className="font-raleway my-4 text-2xl font-bold">
                Join The{' '}
                <span className="border-b-2 border-red-800 font-semibold mt-2  ">
                    Tribe
                </span>
            </h1>
            <hr />

            {/* Swiper Section */}
            <Swiper
                spaceBetween={20}
                slidesPerView={6}
                speed={100} // Smooth transition  
                loop={true}
                autoplay={{ delay: 1000 }}
                watchOverflow={true}
                className="mt-6"
                breakpoints={{
                    320: {
                        slidesPerView: 1, spaceBetween: 10
                    },
                    370: {
                        slidesPerView: 2, spaceBetween: 10
                    },

                    420: { slidesPerView: 2, spaceBetween: 5 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    1280: { slidesPerView: 6, spaceBetween: 20 },
                }}
            >
                {bikes.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="py-4">
                            <VideoCard product={product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default TribeSec;
