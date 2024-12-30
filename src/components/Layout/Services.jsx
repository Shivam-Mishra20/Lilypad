import { div } from 'framer-motion/client';
import { Truck, Headphones, Gift, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const features = [
    {
        icon: Truck,
        title: 'Fast Shipping',
        description: 'Free delivery for orders over $99.00.',
    },
    {
        icon: Headphones,
        title: 'Online Support',
        description: 'Feel free to call us & get the best support.',
    },
    {
        icon: Gift,
        title: 'Gift Voucher',
        description: 'Refer a friend & get surprise gifts.',
    },
    {
        icon: ShieldCheck,
        title: 'Secure Payment',
        description: 'Safe & more secure way to pay online.',
    },

];

const FeatureCard = ({ icon: Icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (


        <div
            className="flex   items-center  justify-between"

        >
            <div className="  w-12 h-12">
                <div
                    className={`  w-full h-full transition-transform duration-300 transform ${isHovered ? 'rotate-[360deg]' : ' '
                        }`}
                >
                    <Icon className="w-12 h-12 dark:text-cyan text-blue-500" onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} />
                </div>
            </div>
            <div>
                <h3 className="font-raleway font-semibold dark:text-white text-lg">{title}</h3>
                <p className="text-sm dark:text-cyan text-gray-600">{description}</p>
            </div>
        </div>


    );
}

export const Services = () => {
    return (

        <div className="w-full dark:bg-gray-800    bg-gray-100  ">

            <div className="flex flex-nowrap gap-8 p-4">




                <div className="scroll-wrapper">
                    <div className="scroll-content gap-3">
                        {features.map((feature, index) => (
                            <div key={index} className="item">
                                <FeatureCard {...feature} />
                            </div>
                        ))}
                        {/* Duplicate content for   looping */}
                        {features.map((feature, index) => (
                            <div key={`duplicate-${index}`} className="item">
                                <FeatureCard {...feature} />
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
    
`}</style>



            </div>


        </div >


    );
}

export default Services;
