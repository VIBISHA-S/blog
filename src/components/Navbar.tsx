'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
            scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full px-8 py-3 border border-white/50 shadow-lg">
                <Link href="/" className="text-2xl font-heading font-black tracking-tighter text-zinc-900 group">
                    BLOG<span className="text-blue-600 group-hover:animate-pulse">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {['Stories', 'About', 'Topics'].map((item) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            className="text-sm font-body font-bold text-zinc-500 hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/blog"
                    className="px-6 py-2 bg-zinc-900 text-white rounded-full text-sm font-body font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg"
                >
                    Read All
                </Link>
            </div>
        </nav>
    );
}
