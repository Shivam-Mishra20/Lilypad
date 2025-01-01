
import { Truck, Headphones, Gift, ShieldCheck } from 'lucide-react';
import { useState } from 'react';





export const services = [
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
        <div className="flex items-center gap-4 p-4">
            <div className="w-12 h-12">
                <div
                    className={`w-full h-full transition-transform duration-300 transform ${isHovered ? 'rotate-[360deg]' : ''
                        }`}
                >
                    <Icon
                        className="w-12 h-12 dark:text-cyan text-blue-500"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </div>
            <div>
                <h3 className="font-raleway font-semibold dark:text-white text-lg">
                    {title}
                </h3>
                <p className="text-sm dark:text-cyan text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export const Services = () => {
    return (
        <div className="w-full dark:bg-gray-800 bg-gray-100 overflow-hidden">
            <div className="relative flex items-center">
                <div className="flex gap-8 animate-marquee">
                    {services.map((feature, index) => (
                        <div key={index} className="flex-shrink-0">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                    {services.map((feature, index) => (
                        <div key={`duplicate-${index}`} className="flex-shrink-0">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind CSS custom styles */}
            <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
};

export default Services;
