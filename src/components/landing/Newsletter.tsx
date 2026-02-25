'use client'

export default function Newsletter() {
    return (
        <section id="newsletter" className="py-24 bg-white border-t border-zinc-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-6">
                    Newsletter
                </h2>
                <p className="text-lg text-zinc-600 font-body mb-10 max-w-2xl mx-auto">
                    Stay updated with our latest stories and digital insights delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 font-body outline-hidden focus:border-blue-600 transition-all"
                        required
                    />
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-body font-bold hover:bg-blue-700 transition-all active:scale-95">
                        Subscribe Now
                    </button>
                </form>
            </div>
        </section>
    );
}
