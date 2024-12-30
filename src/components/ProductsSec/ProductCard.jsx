import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className={`${product.bgColor} rounded-xl sm:rounded-2xl overflow-hidden relative p-6`}>
            <div className="flex flex-col h-full justify-between">
                <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-white text-black dark:text-cyan dark:bg-black rounded-full text-sm font-medium">
                        {product.tag}
                    </span>
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold">{product.title}</h3>
                        {product.subtitle && (
                            <p className="text-2xl font-bold">{product.subtitle}</p>
                        )}
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                </div>
                <div className="mt-6 space-y-4">
                    {product.ctaText === "Buy Now" ? (
                        <button className="explore-button bg-cyan font-bold hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                            <Link to={product.ctaLink}>{product.ctaText}</Link>
                        </button>
                    ) : (
                        <button className="p-0 h-auto text-black underline hover:no-underline">
                            <Link to={product.ctaLink}>{product.ctaText}</Link>
                        </button>
                    )}
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 cursor-pointer">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain w-full transition-transform duration-300 ease-in-out h-full transform hover:scale-150"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
