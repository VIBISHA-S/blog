export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
                    Explore, Learn, <br /> & <span className="text-blue-600 italic">Grow.</span>
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-body leading-relaxed mb-12">
                    Insights into modern development, design architecture, and the future of AI in creative workflows.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-body font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-100">
                        Start Reading
                    </button>
                    <button className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-100 rounded-full font-body font-bold hover:border-blue-600 transition-all active:scale-95">
                        Explore Topics
                    </button>
                </div>
            </div>
        </section>
    );
}
