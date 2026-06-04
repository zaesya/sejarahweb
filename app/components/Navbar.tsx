"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            label: "Sejarah Nusantara",
            href: "/",
        },
        {
            label: "Makam Sunan Ampel",
            href: "/makam-sunan-ampel",
        },
        {
            label: "Menara Kudus",
            href: "/menara-kudus",
        },
        {
            label: "Masjid Agung Demak",
            href: "/masjid-agung-demak",
        },
        {
            label: "Refleksi",
            href: "/refleksi",
        },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#fbf9f4] border-b border-black/10">
            <nav className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex justify-between items-center">

    <h1
        className="text-2xl md:text-3xl font-bold tracking-tight"
        style={{ fontFamily: "Playfair Display" }}
    >
        Sejarah
    </h1>

    {/* Desktop */}
    <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-200 pb-1 ${
                    pathname === item.href
                        ? "text-[#b52619] border-b-2 border-[#b52619] font-semibold"
                        : "text-gray-700 hover:text-[#b52619]"
                }`}
            >
                {item.label}
            </Link>
        ))}
    </div>

    {/* Mobile Burger */}
    <div className="md:hidden relative">

        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 flex items-center justify-center border border-black/10 bg-white hover:bg-gray-50 transition"
        >
            <span className="material-symbols-outlined">
                menu
            </span>
        </button>

        {isOpen && (
            <div className="absolute right-0 top-14 w-64 bg-white border border-black/10 shadow-xl">

                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-5 py-4 text-sm transition ${
                            pathname === item.href
                                ? "bg-[#b52619]/5 text-[#b52619] font-semibold"
                                : "hover:bg-black/[0.03]"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}

            </div>
        )}

    </div>

</nav>
        </header>
    );
}