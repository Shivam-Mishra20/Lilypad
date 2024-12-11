import React, { useState } from 'react';
import { Box, ChevronLeft, ChevronRight, Heart, Repeat, Star } from 'lucide-react';

import '../App.css'
const Button = ({ children, onClick, disabled, className }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 border rounded ${className}`}
    >
        {children}
    </button>
);

const Card = ({ children, className }) => (
    <div className={`border rounded-lg overflow-hidden ${className}`}>
        {children}
    </div>
);

const CardContent = ({ children, className }) => (
    <div className={`p-4 ${className}`}>{children}</div>
);

const products = [
    {
        id: 1,
        category: 'Electric Bike',
        name: 'Kids Electric Bike Bulk 10 Pack Multi Colored For Students',
        availability: 70,
        price: 1000.00,
        image: "/img/Bike/blacks.webp",
    },
    {
        id: 2,
        category: 'Electric Bike',
        name: ' Professional Electric Scooter',
        availability: 45,
        price: 500.00,
        image: "/img/Bike/bike2.jpg",
    },
    {
        id: 3,
        category: 'Hoverboard',
        name: 'Bang & Olufsen Beoplay H9i Wireless Hoverboard',
        availability: 100,
        price: 602.00,
        image: "/img/Bike/reds.webp",
    },
    {
        id: 4,
        category: 'Electric Scooter',
        name: 'Electric Scooter With Advanced Speed Control and Health Monitoring',
        availability: 25,
        price: 602.00,
        image: "/img/Bike/bike6.webp",
    },
    {
        id: 5,
        category: 'Hoverboard',
        name: 'APPLE Hoverboard Series 2 – 42 Mm Stainless Steel Frame',
        availability: 50,
        price: 1202.00,
        image: "/img/Bike/cycc.webp",
    }
];


const ProductSlider = () => {
    const [activeTab, setActiveTab] = useState('new');
    const [startIndex, setStartIndex] = useState(0);
    const productsToShow = 4;

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            Math.min(prevIndex + 1, products.length - productsToShow)
        );
    };

    const previousSlide = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (

        <div className=' bg-[#F5F5F5] mx-4 md:mx-12 rounded-xl '>

            <div className="w-full max-w-7xl mx-auto p-6 ">
                <div className="flex      items-center justify-between mb-8">
                    <div className=' flex gap-5'>
                        <dvi>
                            <span className="  text-sm md:text-2xl text-[var(--lilypad-primary)] inline font-bold">Our Trending Products</span>
                        </dvi>

                        <div className="flex gap-6">
                            <button
                                className={` text-xs md:text-lg ${activeTab === 'new' ? 'text-black border-b-2 border-[var(--lilypad-primary)]' : 'text-gray-600'
                                    }`}
                                onClick={() => setActiveTab('new')}
                            >
                                New Products
                            </button>
                            <button
                                className={`text-xs mr-2 md:mr-1 md:text-lg ${activeTab === 'best' ? 'text-gray-400 border-b-2 border-[var(--lilypad-primary)]' : 'text-gray-600'
                                    }`}
                                onClick={() => setActiveTab('best')}
                            >
                                Best Selling
                            </button>
                        </div>


                    </div>




                    <div className="flex items-center ">

                        <div className="flex gap-2">
                            <button
                                className="  text-black bg-white rounded-full p-4 shadow-lg "
                                onClick={previousSlide}
                                disabled={startIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                className="  text-black bg-white rounded-full p-4 shadow-lg "
                                onClick={nextSlide}
                                disabled={startIndex >= products.length - productsToShow}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='  border mb-10  mt-1'>

                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.slice(startIndex, startIndex + productsToShow).map((product) => (
                        <Card key={product.id} className="relative transform transition-transform duration-300 hover:translate-y-2 shadow-xl ">
                            <button className="absolute right-4 top-4 z-10">
                                <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
                            </button>
                            <CardContent className="p-4">
                                <div className="aspect-square p-4 mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover rounded-lg"
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
                                        Availability: {product.availability}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="font-bold">${product.price.toFixed(2)}</p>
                                    </div>
                                    <div className=' flex my-2  items-center '>
                                        <Star className="h-3  fill-gray-300 w-4" />
                                        <Star className="h-3  fill-yellow-300 w-4" />
                                        <Star className="h-3  fill-gray-300 w-4" />
                                        <Star className="h-3  fill-yellow-300 w-4" />
                                    </div>
                                    <Button className="w-full  border-blue-600 hover:bg-[var(--lilypad-primary)] hover:text-white ">Add To Cart</Button>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <button className="flex items-center gap-1"> <Repeat className="h-4  fill-gray-300 w-4" />Compare</button>
                                        <button className="flex items-center gap-1"><Box className="h-4  fill-gray-300 w-4" />Quick View</button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductSlider