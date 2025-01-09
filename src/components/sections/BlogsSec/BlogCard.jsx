import { Button } from "../../ui/button";

const BlogCard = ({ post }) => (
    <div className="flex flex-col font-inter h-full">
        <div className="relative group">
            <img
                src={post.imageUrl}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-contain transition-transform transform ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">Preview</span>
            </div>
        </div>
        <div className="flex-grow dark:text-white">
            <p className="text-sm text-gray-500 dark:text-white mb-2">{post.date}</p>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-white  text-justify ">{post.excerpt}</p>
        </div>
        <div>
            <Button
                variant="outline"
                className="rounded-full bg-gray-300 dark:bg-transparent hover:border  border-black dark:border-white  hover:bg-bgGray dark:hover:text-white"
            >Read More</Button>
        </div>
    </div>
);


export default BlogCard