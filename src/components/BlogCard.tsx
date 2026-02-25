import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogCardProps {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    slug: string;
    mainImage?: any;
    className?: string;
}

export default function BlogCard({ title, excerpt, category, date, slug, className }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${slug}`}
            className={cn(
                "group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-blue-200 transition-all hover:shadow-xl",
                className
            )}
        >
            <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 to-transparent group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-xs font-bold text-zinc-600 border border-zinc-100 uppercase tracking-wider">
                    {category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-tight">{date}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-zinc-500 text-sm line-clamp-2 mb-6 flex-1">
                    {excerpt}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-bold group-hover:gap-2 gap-1 transition-all">
                    Read More <span>→</span>
                </div>
            </div>
        </Link>
    );
}
