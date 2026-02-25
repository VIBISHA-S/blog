import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const slugs = await sanityFetch<string[]>({ query: postPathsQuery });
    return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await sanityFetch<any>({
        query: postQuery,
        params: { slug },
    });

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <article className="min-h-screen pt-32 pb-20 px-6">
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <div className="flex justify-center gap-2 mb-4">
                        {post.categories?.map((cat: any) => (
                            <span key={cat.title} className="text-blue-600 font-body font-bold text-sm uppercase tracking-wider">
                                {cat.title}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-zinc-900 mb-8 leading-[1.05]">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-zinc-500 font-body">
                        {post.author?.name && (
                            <>
                                <span>By {post.author.name}</span>
                                <span>•</span>
                            </>
                        )}
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </header>

                {post.mainImage && (
                    <div className="max-w-4xl mx-auto mb-20 aspect-video relative rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="max-w-3xl mx-auto">
                    <PortableTextRenderer value={post.body} />
                </div>
            </article>
            <Footer />
        </>
    );
}
