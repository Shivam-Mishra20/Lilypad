import React from "react";
import { Heart, Repeat, Star, Box } from "lucide-react";

const TrendingCard = ({ product }) => {
    return (
        <div className="relative dark:bg-black  dark:text-white transform transition-transform duration-300 hover:translate-y-2 shadow-xl border rounded-lg overflow-hidden">
            <button className="absolute right-4 top-4 z-10">
                <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
            </button>
            <div className="p-4">
                <div className="aspect-square p-4 mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="space-y-2">
                    <p className="text-gray-500">{product.category}</p>
                    <h3 className="font-medium leading-tight line-clamp-2">{product.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${product.availability}%` }}
                        />
                    </div>
                    <p className="text-sm text-gray-500">
                        Availability: {product.availability}%
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex my-2 items-center">
                        <Star className="h-3 fill-gray-300 w-4" />
                        <Star className="h-3 fill-yellow-300 w-4" />
                        <Star className="h-3 fill-gray-300 w-4" />
                        <Star className="h-3 fill-yellow-300 w-4" />
                    </div>
                    <button className="w-full px-4 py-2 border border-blue-600 rounded hover:bg-[var(--lilypad-primary)] hover:text-white">
                        Add To Cart
                    </button>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <button className="flex items-center gap-1">
                            <Repeat className="h-4 fill-gray-300 w-4" /> Compare
                        </button>
                        <button className="flex items-center gap-1">
                            <Box className="h-4 fill-gray-300 w-4" /> Quick View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;
