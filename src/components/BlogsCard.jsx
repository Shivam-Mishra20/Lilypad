

import '../App.css'


const blogPosts = [
    {
        id: 1,
        date: "25 February 2022",
        title: "The Rise of Electric Bikes in Modern Mobility",
        excerpt: "Electric bikes are revolutionizing the way we commute. Learn how these eco-friendly machines are becoming a preferred choice for urban mobility.",
        imageUrl: "/img/Bike/oxo1.webp"
    },
    {
        id: 2,
        date: "17 February 2022",
        title: "EV Bikes: The Future of Sustainable Transportation",
        excerpt: "Discover the benefits of switching to electric bikes, from reducing carbon footprints to cutting down on traffic congestion. The future of transport is electric!",
        imageUrl: "/img/Bike/0I0A4071 copy.webp"
    },
    {
        id: 3,
        date: "25 January 2022",
        title: "How Electric Bikes Are Changing the Cycling Industry",
        excerpt: "Electric bikes are reshaping the cycling world by offering a combination of performance, convenience, and sustainability. Here’s how they’re making an impact.",
        imageUrl: "/img/Bike/evolet_derby_frontview.webp"
    },
    {
        id: 4,
        date: "20 January 2022",
        title: "Why Electric Bikes Are the Perfect Solution for City Commuters",
        excerpt: "With growing urbanization and concerns about pollution, electric bikes offer an ideal solution for commuters seeking an efficient, eco-friendly, and cost-effective way to travel.",
        imageUrl: "/img/Bike/scooty.webp"
    }
];




const BlogsCard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold  text-[var(--lilypad-primary)] mb-4">From The Blogs</h2>

            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="flex flex-col h-full">
                        <div className="p-0">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-contain transition-transform transform ease-in-out hover:scale-105"
                            />

                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600">{post.excerpt}</p>
                        </div>
                        <div>
                            <button className="px-6 py-2 text-white rounded-full explore-button hover:bg-black ">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsCard

