import { Truck, Headphones, Gift, ShieldCheck } from 'lucide-react'
import { useState } from "react"

const features = [
    {
        icon: Truck,
        title: "Fast Shipping",
        description: "Free delivery for orders over $99.00.",
    },
    {
        icon: Headphones,
        title: "Online Support",
        description: "Feel free to call us & get the best support.",
    },
    {
        icon: Gift,
        title: "Gift Voucher",
        description: "Refer a friend & get surprise gifts.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Payment",
        description: "Safe & more secure way to pay online.",
    },
]

function FeatureCard({ icon: Icon, title, description }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex flex-col items-center w-full gap-3 justify-center text-center">
            <div
                className="relative w-12 h-12"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`absolute w-full h-full transition-transform duration-300 transform ${isHovered ? "rotate-[360deg]" : "rotate-0"}`}
                >
                    <Icon className="w-12 h-12 text-blue-500" />
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export function Services() {
    return (
        <div className="w-full overflow-x-auto  bg-gray-100 my-20">
            <div className="flex flex-nowrap gap-8 p-6 ">
                {features.map((feature, index) => (
                    <div key={index} className="min-w-[300px] flex-shrink-0">
                        <FeatureCard {...feature} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
