import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-accent",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Modern Blog | Premium Content",
    description: "A premium blog template built with Next.js, Tailwind v4, and Sanity.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${plusJakarta.variable} ${bricolage.variable} ${instrumentSerif.variable} antialiased bg-white text-zinc-900 font-body`}
            >
                {children}
            </body>
        </html>
    );
}
