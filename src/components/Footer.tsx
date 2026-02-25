export default function Footer() {
    return (
        <footer className="py-20 border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div>
                        <div className="text-2xl font-heading font-bold tracking-tighter text-zinc-900 mb-4">
                            VIBI<span className="text-blue-600">SHA.</span>
                        </div>
                        <p className="text-zinc-500 font-body max-w-xs">
                            A premium blog template for the modern creator.
                            Built with love for high-end digital experiences.
                        </p>
                    </div>

                    <div className="flex gap-12 text-sm font-body font-semibold text-zinc-900 uppercase tracking-widest">
                        <div className="flex flex-col gap-4">
                            <span className="text-zinc-400 text-xs">Navigation</span>
                            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                            <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
                            <a href="/#about" className="hover:text-blue-600 transition-colors">About</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-zinc-400 text-xs">Social</span>
                            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
                            <a href="#" className="hover:text-blue-600 transition-colors">Dribbble</a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-sm font-body">
                    <p>© {new Date().getFullYear()} Vibisha. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
