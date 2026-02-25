import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const components: PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full aspect-video my-10 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog Image"}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-5xl font-heading font-black mb-6 mt-12">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-4xl font-heading font-bold mb-4 mt-10">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-3xl font-heading font-bold mb-4 mt-8">{children}</h3>,
        normal: ({ children }: any) => <p className="text-xl font-body text-zinc-700 leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-blue-600 pl-6 my-8 italic font-accent text-3xl text-zinc-500">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-6 font-body text-xl space-y-2">{children}</ul>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
            return (
                <a href={value.href} rel={rel} className="text-blue-600 underline hover:no-underline font-semibold">
                    {children}
                </a>
            );
        },
    },
};

export default function PortableTextRenderer({ value }: { value: any }) {
    return (
        <div className="max-w-3xl mx-auto">
            <PortableText value={value} components={components} />
        </div>
    );
}
