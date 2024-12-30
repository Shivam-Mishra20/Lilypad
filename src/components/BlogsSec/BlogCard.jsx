const BlogCard = ({ post }) => (
    <div className="flex flex-col h-full">
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
            <button className="px-6 mt-2 py-2 text-black bg-cyan hover:text-white dark:bg-cyan rounded-full explore-button dark:hover:bg-cyan  hover:bg-black">Read More</button>
        </div>
    </div>
);


export default BlogCard