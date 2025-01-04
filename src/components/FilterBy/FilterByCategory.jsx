import React from "react";
import CategoryTiles from "./CategoryTiles";

const FilterByCategory = () => {
    return (
        <section className=" dark:bg-black dark:text-lightCyan bg-bgGray     ">
            <div className="container  mx-auto  px-8  bg-bgGray dark:bg-black     md:px-10  py-8">
                <h2 className="text-2xl font-raleway  text-black dark:text-cyan  font-semibold  mb-4">Filter By Category </h2>
                <hr class="border dark:border-white border-black  w-full  mx-auto" />
                <div className="mt-4 overflow-x-auto  relative">
                    <CategoryTiles />
                </div>
            </div>
        </section>
    );
};

export default FilterByCategory;
