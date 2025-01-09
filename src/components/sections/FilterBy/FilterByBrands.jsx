import React from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import Tiles from "./Tiles";
import { Brands } from "@/Data/Data";

const FilterByBrands = () => {
    return (
        <section className=" dark:bg-black dark:text-lightCyan bg-bgGray  ">
            <div className="container  mx-auto  px-8   md:px-10  py-4">
                <h2 className="text-2xl font-raleway   text-lightgray  dark:text-cyan font-semibold  mb-4">Filter By Brands </h2>
                <hr className="border dark:border-white border-black  w-full  mx-auto" />

                <div className="mt-4 overflow-x-auto  relative">
                    <TooltipProvider>
                        <Tiles data={Brands} hidden={true} delay={8000} />

                    </TooltipProvider>
                </div>
            </div>
        </section>
    );
};

export default FilterByBrands; 
