import React from "react";
import SwiperWithPrice from "./SwiperWithPrice";




const FilterByPrice = ({ data, title, }) => {
    return (
        <section className="container  mx-auto  px-8     md:px-10 py-8">
            <h2 className="text-2xl font-raleway text-cyan font-bold mb-4">{title}</h2>
            <hr />
            <div className="mt-4 overflow-x-auto relative">
                <SwiperWithPrice data={data} />
            </div>
        </section>
    );
};

export default FilterByPrice;
