import React from "react";


import SwiperWithItems from "./SwiperWithItems";

const FilterBy = ({ data, title, hidden }) => {
    return (
        <section className="container  mx-auto  px-8     md:px-10  py-8">
            <h2 className="text-2xl font-raleway text-cyan font-bold mb-4">{title}</h2>
            <hr />
            <div className="mt-4 overflow-x-auto  relative">
                <SwiperWithItems data={data} hidden={hidden} />
            </div>
        </section>
    );
};

export default FilterBy;
