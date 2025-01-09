import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/Data/Data';
import BlogCard from './BlogCard';


const Blog_Sec = () => {
    const [startIndex, setStartIndex] = useState(0);
    const productsToShow = 4;

    const nextSlide = () => {
        setStartIndex((prevIndex) =>
            Math.min(prevIndex + 1, blogPosts.length - productsToShow)
        );
    };

    const previousSlide = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <section className=" dark:bg-black dark:text-lightCyan bg-bgGray     ">
            <div className="container mx-auto   px-10   py-8">
                <div className='flex items-center  justify-between w-full'>
                    <h2 className="text-xl sm:text-2xl font-bold dark:text-cyan  text-lightgray  font-raleway  ">From The Blogs</h2>
                    <div className="flex  gap-2">
                        <button
                            className="text-black cursor-pointer bg-white rounded-full p-4 shadow-lg"
                            onClick={previousSlide}
                            disabled={startIndex === 0}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            className="text-black cursor-pointer bg-white rounded-full p-4 shadow-lg"
                            onClick={nextSlide}
                            disabled={startIndex >= blogPosts.length - productsToShow}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <hr className="border dark:border-white my-4 border-black  min-w-full  mx-auto" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-6">

                    {blogPosts.slice(startIndex, startIndex + productsToShow).map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Blog_Sec;
