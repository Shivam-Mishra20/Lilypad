'use client'

import { useState } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import '../App.css'

export default function ProductListing() {
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const specialProduct = {
        id: 1,
        name: "Ev Moto is new in ev sector vechile let's change the world ",
        category: "Cycle",
        price: 110.00,
        originalPrice: 122.00,
        availability: 40,
        rating: 4,
        images: [

            "/img/Bike/oxo.webp",
            "/img/Bike/oxo1.webp",
            "/img/cyc3.webp",
            "/img/Bike/oxo3.webp",
            "/img/cyc5.webp",
        ],
        discount: 10
    }

    const bestsellers = [
        {
            id: 1,
            name: "TP-Link Tapo C200 Pan/Tilt Wi-Fi Camera",
            category: "EV Bike",
            price: 602.00,
            availability: 35,
            rating: 0,
            image: "/img/Bike/oranges.webp"
        },
        {
            id: 2,
            name: "Sony EXTRA BASS Portable Splash-Proof Wireless Speaker",
            category: "Scooty",
            price: 122.00,
            availability: 30,
            rating: 0,
            image: "/img/Bike/oxo3.webp"
        },
        {
            id: 3,
            name: "E Circle Men's Smart Watch For Android Phones",
            category: "Cycle",
            price: 98.00,
            availability: 49,
            rating: 5,
            image: "/img/Bike/PLAYER 1.webp"
        },
        {
            id: 4,
            name: "Hero Session Action Camera With 8MP Photo",
            category: "Scooty",
            price: 122.00,
            availability: 25,
            rating: 0,
            image: "/img/cyc4.webp"
        },
        {
            id: 5,
            name: "FUJIFILM Instax Instax Mini LiPlay Hybrid Instant Camera",
            category: "Cycle",
            price: 1202.00,
            availability: 35,
            rating: 0,
            image: "/img/Bike/evv.webp"
        },
        {
            id: 6,
            name: "Realme Pad Mini 3 GB RAM 32 GB ROM 8.7 inch with Wi-Fi+4G Tablet",
            category: "EV Bike",
            price: 122.00,
            availability: 80,
            rating: 5,
            image: "/img/Bike/reds.webp"
        }
    ];


    const renderRatingStars = (rating) => {
        return (
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                ))}
            </div>
        )
    }

    const renderAvailabilityBar = (availability) => {
        return (
            <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600">Availability: {availability}</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${availability}%` }}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-4  my-6 px-10  ">
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl  text-[var(--lilypad-primary)] font-bold">Special Products</h2>
                        <div className="flex gap-2">
                            <button
                                className="p-2 border rounded-full "
                                onClick={() => setActiveImageIndex(prev => Math.max(0, prev - 1))}
                                disabled={activeImageIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                className="p-2 border rounded-full "
                                onClick={() => setActiveImageIndex(prev => Math.min(specialProduct.images.length - 1, prev + 1))}
                                disabled={activeImageIndex === specialProduct.images.length - 1}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <hr />

                    <div className="relative bg-white shadow-xl mt-6 p-6 rounded-md">
                        {specialProduct.discount && (
                            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                                {specialProduct.discount}%
                            </span>
                        )}
                        <div className="p-1">
                            <div className="relative  h-auto  mb-1">
                                <img
                                    src={specialProduct.images[activeImageIndex]}
                                    alt={specialProduct.name}
                                    className="object-contain w-[200px] md:w-[404px]  "
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="text-sm text-gray-600">{specialProduct.category}</div>
                                <h3 className="font-medium">{specialProduct.name}</h3>
                                {renderAvailabilityBar(specialProduct.availability)}
                                {renderRatingStars(specialProduct.rating)}
                                <div className="flex items-center gap-2">
                                    <span className="text-red-500 font-bold">${specialProduct.price.toFixed(2)}</span>
                                    {specialProduct.originalPrice && (
                                        <span className="text-gray-400 line-through">
                                            ${specialProduct.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <span>19</span>
                                        <span className="text-red-500">23</span>
                                        <span>:</span>
                                        <span className="text-red-500">56</span>
                                        <span>:</span>
                                        <span className="text-red-500">06</span>
                                    </div>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[var(--lilypad-primary) mb-4">Bestsellers</h2>
                    <hr />

                    <div className="grid  mt-6 sm:grid-cols-2 gap-4">
                        {bestsellers.map((product) => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-md  transition-transform transform hover:scale-105 hover:border "
                            >
                                <div className="p-2">
                                    <button
                                        className="absolute right-2 top-2 z-10 p-2"
                                    >
                                        <Heart className="h-4 w-4" />
                                    </button>

                                    <div className="flex items-center justify-center gap-4">
                                        <div className="relative aspect-square mb-2">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="object-contain h-[200px]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-sm text-gray-600">{product.category}</div>
                                            <h3 className="font-medium line-clamp-2">{product.name}</h3>
                                            {renderAvailabilityBar(product.availability)}
                                            {renderRatingStars(product.rating)}
                                            <div className="font-bold">
                                                ${product.price.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
