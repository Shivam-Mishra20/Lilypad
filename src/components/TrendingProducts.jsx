import { useState } from 'react';
import '../App.css'

const categories = [
    {
        name: "Electric Mountain Bike",
        image: "/img/Bike/LIFTER 250.webp",
    },
    {
        name: "Electric City Bike",
        image: "/img/Bike/bike3.webp",

    },
    {
        name: "Folding Electric Bike",
        image: "/img/Bike/TOP GUN 1.webp",
    },
    {
        name: "Electric Hoverboard",
        image: "/img/Bike/HOVER.webp",
    },
    {
        name: "Electric Scooter",
        image: "/img/Bike/evolet_derby_frontview.webp",
    },
    {
        name: "Hybrid Electric Bike",
        image: "/img/Bike/S60 beta blue.webp",

    },
    {
        name: "Electric Cargo Bike",
        image: "/img/Bike/yellows.webp",
    },
];


const TrendingProducts = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const handleScrollLeft = () => {
        setScrollIndex(Math.max(0, scrollIndex - 1));
    };

    const handleScrollRight = () => {
        setScrollIndex(Math.min(categories.length - 9, scrollIndex + 1));
    };

    return (
        <section className="container text-[var(--lilypad-primary)] mx-auto px-4 py-8">
            <h2 className="text-2xl text-[var(--lilypad-primary)] font-bold mb-4">Trending Categories</h2>
            <hr />


            <div className=" overflow-x-auto md:overflow-hidden flex mt-2  space-x-4">
                {categories.map((category, index) => (
                    <div key={category.name + index} className="flex-shrink-0  w-48 flex flex-col items-center">
                        <div className=" rounded-lg p-4 w-full aspect-square flex items-center justify-center mb-2">
                            <img
                                src={category.image}
                                alt={category.name}
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3
                            className={`text-center font-medium ${category.highlight ? "text-blue-600" : "text-gray-900"}`}
                        >
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingProducts;
