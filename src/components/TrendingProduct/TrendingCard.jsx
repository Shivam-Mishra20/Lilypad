import React from "react";
import { Heart, Repeat, Star, Box } from "lucide-react";

const TrendingCard = ({ product }) => {
    return (
        <div className="relative dark:bg-black   dark:text-white transform transition-transform duration-300 hover:translate-y-2 shadow-xl border rounded-lg overflow-hidden">

            <div className="p-2 sm:p-4 ">
                <div className="aspect-square  p-6 mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="space-y-2">
                    <p className="text-gray-500">{product.category}</p>

                    <div className="flex my-2  justify-between items-center">

                        <div className=" flex items-center">
                            <Star className="h-3 fill-yellow-300 w-4" />

                            <Star className="h-3 fill-yellow-300 w-4" />
                            <Star className="h-3 fill-yellow-300 w-4" />

                            <Star className="h-3 fill-yellow-300 w-4" />

                        </div>
                        <h3 className="font-medium leading-tight line-clamp-2">{product.name}</h3>


                    </div>

                    <div className="flex items-center justify-between">
                        <p className="font-bold">${product.price.toFixed(2)}</p>
                        <p className=" font-light  text-gray-600  line-through ">${product.price.toFixed(2)}</p>
                    </div>

                    <hr />
                    <div className="my-4 p-2">
                        <div className="flex items-center justify-between gap-4 text-center">
                            <div className="flex items-center justify-center flex-col">
                                <h4 className="font-bold text-lg dark:text-white">{product.features.range}</h4>
                                <p className="text-sm dark:text-gray-300">Range</p>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <h4 className="font-bold text-lg dark:text-white">{product.features.topSpeed}</h4>
                                <p className="text-sm dark:text-gray-300">Top Speed</p>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <h4 className="font-bold text-lg dark:text-white">{product.features.chargingTime}</h4>
                                <p className="text-sm dark:text-gray-300">Charging  </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default TrendingCard;
