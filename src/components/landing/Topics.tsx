export default function Topics() {
    const topics = [
        { name: "Artificial Intelligence", count: 12, icon: "🤖" },
        { name: "Frontend Architecture", count: 24, icon: "🏗️" },
        { name: "UI/UX Design", count: 18, icon: "🎨" },
        { name: "DevOps & Cloud", count: 9, icon: "☁️" },
        { name: "Product Strategy", count: 15, icon: "📈" },
    ];

    return (
        <section id="topics" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-4 tracking-tighter">
                        Navigate through <span className="text-blue-600 italic">topics</span>
                    </h2>
                    <p className="text-zinc-500 font-body max-w-xl mx-auto italic">
                        Select a category to discover targeted insights and deep dives into the world of tech and design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {topics.map((topic) => (
                        <button
                            key={topic.name}
                            className="p-8 border-2 border-zinc-900 text-left hover:bg-zinc-900 hover:text-white transition-all group relative overflow-hidden"
                        >
                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                                {topic.icon}
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-2 leading-tight">
                                {topic.name}
                            </h3>
                            <div className="text-sm font-body opacity-60">
                                {topic.count} Articles
                            </div>
                        </button>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-zinc-900 text-white font-body font-bold hover:bg-blue-600 transition-colors">
                        View All Categories
                    </button>
                </div>
            </div>
        </section>
    );
}
