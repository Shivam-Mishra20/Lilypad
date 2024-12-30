import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import { Productcards } from "../../Data/Data";

const ProductGrid = () => {
    return (
        <div className="container font-raleway mx-auto px-4 md:px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Productcards.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;