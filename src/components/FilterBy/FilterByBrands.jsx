import React from "react";
import BrandsTile from "./BrandsTile";

const FilterByBrands = () => {
    return (
        <section className=" dark:bg-black dark:text-lightCyan bg-bgGray     ">
            <div className="container  mx-auto  px-8     md:px-10  py-4">
                <h2 className="text-2xl font-raleway text-cyan dark:text-cyan font-semibold  mb-4">Filter By Brands </h2>
                <hr class="border dark:border-white border-black  w-full  mx-auto" />

                <div className="mt-4 overflow-x-auto  relative">
                    <BrandsTile />
                </div>
            </div>
        </section>
    );
};

export default FilterByBrands;
