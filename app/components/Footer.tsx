
export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display" }}>
                        Scholarly Archive
                    </h3>
                    <p className="text-gray-500 mt-2">
                        © 2026 Scholarly Archive. All Rights Reserved. Curated for Historical Research.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
                    <a href="/about" className="hover:text-gray-900">
                        About
                    </a>
                    <a href="/privacy" className="hover:text-gray-900">
                        Privacy
                    </a>
                    <a href="/contact" className="hover:text-gray-900">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
