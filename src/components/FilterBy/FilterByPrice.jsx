import React from "react";
import PriceRange from "./PriceRange";

const FilterByPrice = () => {
    return (
        <section className="container  mx-auto  px-8  bg-bgGray   dark:bg-black   md:px-10 py-8">
            <h2 className="text-2xl font-raleway  text-black dark:text-cyan font-semibold  mb-4">Filter By Price</h2>
            <hr class="border dark:border-white border-black  w-full  mx-auto" />

            <div className="mt-4 overflow-x-auto relative">
                <PriceRange />
            </div>

            <hr class="border dark:border-white border-black  min-w-full  mx-auto" />

        </section>
    );
};

export default FilterByPrice;
