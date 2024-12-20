import React, { useState } from 'react'
import { Slider } from 'antd'
import Title from 'antd/es/skeleton/Title';


const PriceRange = () => {
    const [range, setRange] = useState([0, 160000]);

    const onChange = (value) => {
        setRange(value);
    };
    return (
        <>
            <section className="container text-[var(--lilypad-primary)] mx-auto px-3 md:px-10 py-8">
                <h2 className="text-2xl text-[var(--lilypad-primary)] font-bold mb-4">Filter By Price</h2>
                <hr />
                <div className=' w-auto md:w-[30%] mx-10  my-20 '>

                    <Slider
                        range
                        min={0}
                        max={160000}
                        step={1000}
                        defaultValue={[0, 160000]}
                        onChange={onChange}

                    />
                    <p>
                        Price Range: {range[0]} - {range[1]}
                    </p>
                </div >
            </section>


        </>
    )
}

export default PriceRange