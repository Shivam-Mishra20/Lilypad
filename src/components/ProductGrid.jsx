import React from "react";
import { Link } from "react-router-dom";
import '../App.css'



const ProductGrid = ({ products }) => {
    return (
        <div className="container mx-auto px-4 md:px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`${product.bgColor} rounded-3xl overflow-hidden relative p-6 `}
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium">
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
                                    <button className=" explore-button  hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                                        <Link to={product.ctaLink}>{product.ctaText}</Link>
                                    </button>
                                ) : (
                                    <button className="p-0 h-auto text-black underline hover:no-underline">
                                        <Link to={product.ctaLink}>{product.ctaText}</Link>
                                    </button>
                                )}
                            </div>
                            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 cursor-pointer ">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-contain w-full transition-transform hover:scale-[1.06] h-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;