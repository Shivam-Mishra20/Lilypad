import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button"

const priceRanges = [
    { label: "Under ₹20,000" },
    { label: "Under ₹50,000" },
    { label: "Under ₹60,000" },
    { label: "Under ₹70,000" },
    { label: "Under ₹80,000" },
    { label: "Under ₹1 lakh" },
    { label: "Under ₹1.6 lakh" },



];


const PriceRange = () => {



    return (
        //Slider price range 
        // <section className="container mx-auto p-6">
        //     <div className="w-full max-w-md mx-auto dark:shadow-sm   shadow-xl  dark:shadow-white bg-gray-100 dark:bg-black text-black dark:text-white p-6 rounded-lg   shadow-black">
        //         <h2 className="text-xl font-semibold mb-4 text-center">Select Price Range</h2>


        //         <div className="flex justify-between items-center mb-6">
        //             <span className="text-sm font-medium">₹{range[0].toLocaleString()}</span>
        //             <span className="text-sm font-medium">₹{range[1].toLocaleString()}</span>
        //         </div>


        //         <Slider
        //             value={range}
        //             onValueChange={setRange}
        //             min={20000}
        //             max={160000}
        //             step={1000}
        //             className="bg-gray-600  rounded-full h-2"
        //         />
        //     </div>
        // </section>
        <section className="dark:bg-black   bg-bgGray w-full">
            <div className="container mx-auto    py-4">
                <div className="flex ">
                    <div className=" my-4  w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                            {priceRanges.map((range, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger>
                                        <Button
                                            variant="outline"
                                            className="rounded-full bg-gray-300 dark:bg-transparent hover:border  border-black dark:border-white  hover:bg-bgGray dark:hover:text-white"
                                        >
                                            {range.label}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>{range.label}</span>
                                    </TooltipContent>
                                </Tooltip>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section >



    );
};

export default PriceRange;
