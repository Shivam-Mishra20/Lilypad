import React from "react";

import { TooltipProvider } from "../ui/tooltip";
import Tiles from "./Tiles";
import { category } from "@/Data/Data";

const FilterByCategory = () => {
    return (
        <section className=" dark:bg-black dark:text-lightCyan bg-bgGray     ">
            <div className="container  mx-auto  px-8  bg-bgGray dark:bg-black     md:px-10  py-8">
                <h2 className="text-2xl font-raleway  text-lightgray dark:text-cyan  font-semibold  mb-4">Filter By Category </h2>
                <hr class="border dark:border-white border-black  w-full  mx-auto" />
                <div className="mt-4 overflow-x-auto  relative">
                    <TooltipProvider>
                        <Tiles data={category} hidden={false} />
                    </TooltipProvider>
                </div>
            </div>
        </section>
    );
};

export default FilterByCategory;
