import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";

export default async function BlogListing() {
    const posts = await sanityFetch<any[]>({ query: postsQuery });

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <header className="mb-20 text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-zinc-900 mb-6 underline decoration-blue-500 decoration-8 underline-offset-12">
                            THE BLOG.
                        </h1>
                        <p className="text-xl text-zinc-500 font-body leading-relaxed">
                            Thoughtful articles, deep dives, and modern trends.
                            Everything you need to stay ahead of the curve.
                        </p>
                    </header>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <BlogCard
                                    key={post._id}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    category={post.categories?.[0]?.title || "Article"}
                                    date={new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    slug={post.slug}
                                    mainImage={post.mainImage}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-zinc-50 rounded-[3rem] border border-zinc-100">
                            <p className="text-2xl font-heading font-bold text-zinc-400">No posts found yet.</p>
                            <p className="text-zinc-500 mt-2">Check back soon or head over to the Studio to write one!</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
