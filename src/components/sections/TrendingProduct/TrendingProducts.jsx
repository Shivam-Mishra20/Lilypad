import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Trendingitem as products } from "../../../Data/Data";

import TrendingCard from "./TrendingCard";

const TrendingProducts = () => {

    const [activeTab, setActiveTab] = useState("new");
    const [startIndex, setStartIndex] = useState(0);

    const productsToShow = 4;


    // for next card 
    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            Math.min(prevIndex + 1, products.length - productsToShow)
        );
    };
    // for prev card 
    const previousSlide = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className=" dark:bg-black dark:text-lightCyan bg-bgGray    rounded-md">
            <div className=" w-full  container     mx-auto px-10 ">
                <div className="flex items-center justify-between   mb-6">
                    <div className="flex gap-5">
                        <span className="text-sm  hidden sm:inline  md:text-2xl text-lightgray dark:text-cyan  font-bold">
                            Our Trending Products
                        </span>
                        <div className="flex  gap-6">
                            <button
                                className={`text-sm dark:text-white md:text-lg ${activeTab === "new"
                                    ? "text-black border-b-2 border-[var(--lilypad-primary)]"
                                    : "text-gray-600"
                                    }`}
                                onClick={() => setActiveTab("new")}
                            >
                                New Products
                            </button>
                            <button
                                className={`text-sm dark:text-white md:text-lg ${activeTab === "best"
                                    ? "text-black border-b-2 border-[var(--lilypad-primary)]"
                                    : "text-gray-600"
                                    }`}
                                onClick={() => setActiveTab("best")}
                            >
                                Best Selling
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div className="flex gap-2">
                            <button
                                className="text-black bg-white rounded-full p-2 sm:p-4 shadow-lg"
                                onClick={previousSlide}
                                disabled={startIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                className="text-black bg-white rounded-full p-2 sm:p-4 shadow-lg"
                                onClick={nextSlide}
                                disabled={startIndex >= products.length - productsToShow}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-4 sm:gap-2  mt-6">
                    {products.slice(startIndex, startIndex + productsToShow).map((product) => (
                        <TrendingCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
