import React from "react";
import PriceRange from "./PriceRange";
import Tiles from "./Tiles";
import { TooltipProvider } from "@radix-ui/react-tooltip";
const priceRanges = [
    { label: "Under ₹50,000" },
    { label: "Under ₹60,000" },
    { label: "Under ₹70,000" },
    { label: "Under ₹80,000" },
    { label: "Under ₹1 lakh" },
    { label: "Under ₹1.5 lakh" },
    { label: "Under ₹2 lakh" },
    { label: "Above ₹2 lakh" }
];

const FilterByPrice = () => {
    return (
        <section className=" dark:bg-black dark:text-lightCyan bg-bgGray     ">
            <div className="container  mx-auto  px-8  bg-bgGray   dark:bg-black   lg:px-10 py-4">
                <h2 className="text-2xl font-raleway  text-lightgray dark:text-cyan font-semibold  mb-4">Filter By Price</h2>
                <hr className="border dark:border-white border-black  w-full  mx-auto" />

                <div className=" overflow-x-auto  ">
                    <TooltipProvider>
                        <PriceRange />
                    </TooltipProvider>
                </div>

                <hr className="border dark:border-white border-black  min-w-full  mx-auto" />

            </div>
        </section>
    );
};

export default FilterByPrice;
