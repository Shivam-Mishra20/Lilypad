import React from 'react';
import '../App.css';

const Newsletter = () => {
    const images = [
        { src: "/img/brand logos/logo1.png", alt: "Logo 2" },
        { src: "/img/brand logos/logo2.jpg", alt: "Logo 3" },
        { src: "/img/brand logos/logo3.jpeg", alt: "Logo 4" },
        { src: "/img/brand logos/logo4.png", alt: "Logo 5" },
        { src: "/img/brand logos/logo6.png", alt: "Download Icon" },
        { src: "/img/brand logos/logo9.png", alt: "Lily Logo" },
    ];

    return (
        <div className="flex my-4 flex-wrap items-center justify-center mx-auto md:justify-between gap-4 p-10 border">
            {images.map((image, index) => (
                <div key={index} className="flex justify-center cursor-pointer img-container">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-40 h-24 object-contain sm:w-32 sm:h-20 md:w-36 md:h-22 xs:w-28 xs:h-16"
                    />
                </div>
            ))}
        </div>
    );
};

export default Newsletter;
