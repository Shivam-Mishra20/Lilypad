const VideoCard = ({ product }) => {


    return (


        <div key={product.id} className="w-[174px]  cursor-pointer sm:w-[220px] mx-auto bg-white rounded-lg overflow-hidden  shadow-md ">
            <div className="relative h-[320px] bg-gradient-to-b from-purple-900/20 to-transparent">

                <div className="relative w-full h-full">
                    <div className="absolute inset-0 backdrop-blur-sm">
                        <video
                            src={product.imageSrc}
                            alt={product.title}
                            width={200}
                            height={300}
                            className="object-cover w-full h-full"
                            autoPlay
                            loop
                            muted
                        />
                    </div>

                    {/* Sparkle effects */}
                    <div className="absolute inset-0">
                        <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-pulse" />
                        <div className="absolute top-12 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-100" />
                        <div className="absolute bottom-16 left-12 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />
                    </div>


                </div>
            </div>

            {/* Product thumbnail */}
            <div className="  dark:bg-gray-300 mx-auto relative p-2">

                <div className="absolute flex items-center justify-center top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={product.thumbnail}
                        alt="Electric Bike"


                        className="object-contain  "
                    />
                </div>


                {/* Product details */}
                <h3 className="text-[15px] font-medium text-center text-gray-900   my-3">
                    {product.title}
                </h3>

                <div className="flex  items-center justify-center w-full     gap-2">

                    <span className="text-base font-semibold">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
                    <span className="text-sm text-green-500 font-medium">{product.discount}</span>
                </div>
            </div>
        </div>


    );
}


export default VideoCard