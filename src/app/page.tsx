import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import FeaturedBlogs from "@/components/landing/FeaturedBlogs";
import Topics from "@/components/landing/Topics";
import Newsletter from "@/components/landing/Newsletter";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <FeaturedBlogs />
                <About />
                <Topics />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
