import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

const generatePriceData = () =>
    Array.from({ length: 50 }, (_, i) => ({
        price: 20000 + i * 2800, // Generate prices between ₹20,000 and ₹1,60,000
        count: Math.floor(Math.random() * 20) + 1,
    }));

const PriceRange = () => {
    const [range, setRange] = useState([20000, 160000]); // Initial range
    const priceData = generatePriceData();
    const maxCount = Math.max(...priceData.map((d) => d.count));

    // Clamp values within range
    const clampRange = (value, index) => {
        const clampedValue = Math.min(Math.max(value, 20000), 160000);
        if (index === 0 && clampedValue > range[1]) return range[0]; // Min cannot exceed Max
        if (index === 1 && clampedValue < range[0]) return range[1]; // Max cannot be below Min
        return clampedValue;
    };

    const handleRangeChange = (newRange) => {
        const clampedRange = [
            Math.max(newRange[0], 20000),
            Math.min(newRange[1], 160000),
        ];
        setRange(clampedRange);
    };

    const handleInputChange = (value, index) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            const clampedValue = clampRange(newValue, index);
            const updatedRange = [...range];
            updatedRange[index] = clampedValue;
            setRange(updatedRange);
        }
    };

    return (
        <section className="container mx-auto   bg-bgGray dark:bg-black text-white ">

            <div className="w-full cursor-pointer dark:border-white md:max-w-[70%] p-12 mx-auto border h-[200px] border-black my-10 rounded-lg shadow-sm">
                {/* Histogram */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-end">
                        {priceData.map((d, i) => (
                            <div
                                key={i}
                                className="flex-1 dark:bg-cyan bg-blue-300"
                                style={{
                                    height: `${(d.count / maxCount) * 100}%`,
                                    opacity: range[0] <= d.price && d.price <= range[1] ? 1 : 0.3,
                                }}
                            />
                        ))}
                    </div>

                    {/* Slider with labels */}
                    <div className="relative   pt-6">
                        <div className="absolute -top-1 left-0 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
                            ₹{range[0].toLocaleString()}
                        </div>
                        <div className="absolute -top-1 right-0 translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
                            ₹{range[1].toLocaleString()}
                        </div>
                        <Slider
                            value={range}
                            min={20000}
                            max={160000}
                            step={1000}
                            onValueChange={handleRangeChange}
                            className="custom-slider z-10 mt-2 dark:bg-gray-500 bg-black"
                        />
                    </div>
                </div>

                {/* Input fields */}
                <div className="grid grid-cols-2 gap-4">
                    {['Min Price', 'Max Price'].map((label, index) => (
                        <div key={index}>
                            <label
                                htmlFor={`price-${index}`}
                                className="block text-sm font-medium dark:text-white text-gray-700 mb-2"
                            >
                                {label}
                            </label>
                            <div className="relative">
                                <Input
                                    id={`price-${index}`}
                                    type="number"
                                    value={range[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    min={20000}
                                    max={160000}
                                    className="pl-6 text-black dark:text-white"
                                />
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PriceRange;
