export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-200">
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-heading text-xl">
                        [Author Portrait]
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-6">
                        Building digital experiences that <span className="text-blue-600">matter.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 font-body mb-6 leading-relaxed">
                        Hi, I'm Vibisha. I'm a passionate developer and designer focused on the intersection of technology and human experience.
                        Through this blog, I share my journey of learning new frameworks, mastering UI/UX, and exploring the vast potential of AI.
                    </p>
                    <div className="space-y-4">
                        {['100+ Articles Written', '5k+ Monthly Readers', 'Open Source Contributor'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                <span className="font-body font-semibold text-zinc-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
