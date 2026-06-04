"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

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
                    className="text-3xl font-bold tracking-tight"
                    style={{ fontFamily: "Playfair Display" }}
                >
                    Sejarah
                </h1>

                <div className="hidden md:flex gap-8">

                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`transition-all duration-200 pb-1 ${pathname === item.href
                                ? "text-[#b52619] border-b-2 border-[#b52619] font-semibold"
                                : "text-gray-700 hover:text-[#b52619]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                </div>

            </nav>
        </header>
    );
}