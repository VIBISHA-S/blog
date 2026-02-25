import BlogCard from "../BlogCard";

export default function FeaturedBlogs() {
    const blogs = [
        {
            _id: "1",
            title: "The Future of Web Development in 2026",
            excerpt: "Exploring the shift towards AI-first frameworks and local-first data patterns that are redefining the web ecosystem.",
            category: "Technology",
            date: "Feb 02, 2026",
            slug: "future-of-web-dev",
        },
        {
            _id: "2",
            title: "Mastering Modern Typography",
            excerpt: "How trending fonts like Bricolage Grotesque are changing the way we think about personality in digital design.",
            category: "Design",
            date: "Jan 28, 2026",
            slug: "mastering-modern-typography",
        },
        {
            _id: "3",
            title: "Why Sanity is the Best CMS for Creators",
            excerpt: "A deep dive into why developers and creators prefer flexible, API-driven content systems.",
            category: "Development",
            date: "Jan 15, 2026",
            slug: "sanity-cms-review",
        },
    ];

    return (
        <section id="stories" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16 underline-offset-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-4">
                            Featured Stories
                        </h2>
                        <p className="text-zinc-600 font-body text-lg">
                            Hand-picked insights and top-performing articles.
                        </p>
                    </div>
                    <a href="/blog" className="hidden sm:block px-6 py-2 border border-zinc-200 rounded-full font-body font-bold hover:bg-zinc-50 transition-colors">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog._id}
                            title={blog.title}
                            excerpt={blog.excerpt}
                            category={blog.category}
                            date={blog.date}
                            slug={blog.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
