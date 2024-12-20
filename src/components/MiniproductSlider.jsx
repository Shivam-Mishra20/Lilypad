import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const MiniproductSlider = ({ data, title, hidden, }) => {
    const showNavigation = data.length > 8;

    return (
        <section className="container text-[var(--lilypad-primary)] mx-auto px-4 md:px-14 py-8">
            <h2 className="text-2xl text-[var(--lilypad-primary)] font-bold mb-4">{title}</h2>
            <hr />

            <div className="mt-4 overflow-x-auto relative">
                <Swiper
                    modules={showNavigation ? [Navigation, Pagination, Autoplay] : [Pagination, Autoplay]}
                    slidesPerView={8}
                    spaceBetween={10}
                    slidesPerGroup={4}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: true }} // Add autoplay with 2-second delay
                    className="swiper-container"
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 9,
                            spaceBetween: 4,
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide className="my-6 space-x-2" key={item.id || index}>
                            <div className="p-4 w-[119px]  text-center h-[119px] bg-[#F7F7F7] aspect-square   shadow-md  rounded-lg flex items-center justify-center mb-2 group">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={`  w-full h-full object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-110`}
                                />



                            </div>
                            <div className={`text-center mx-auto ${hidden} `}>
                                <h6 className={`   mr-6 text-sm  text-gray-900 `}>
                                    {item.name}
                                </h6>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {showNavigation && (
                    <div>
                        {/* Tailwind Styling for Swiper Navigation Buttons */}
                        <style>
                            {`
                            .swiper-button-next, .swiper-button-prev {
                                @apply top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6 hidden lg:block;
                            }
                            .swiper-button-next {
                                @apply -right-8;
                            }
                            @media (max-width: 768px) {
                                .swiper-button-next, .swiper-button-prev {
                                    @apply hidden;
                                }
                            }
                            `}
                        </style>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MiniproductSlider;
