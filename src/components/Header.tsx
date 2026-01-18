import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">✦</span>
                    </div>
                    <span className="font-semibold text-lg">Nondual Intimacy</span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="relative group">
                        <button
                            onClick={() => setIsExploreOpen(!isExploreOpen)}
                            className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
                        >
                            Explore
                            <svg className={`w-4 h-4 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isExploreOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fade-in text-gray-700">
                                <a href="#fragile-silence" onClick={() => setIsExploreOpen(false)} className="block px-4 py-2 text-sm hover:bg-cream/50">Fragile Silence</a>
                                <a href="#gentle-presence" onClick={() => setIsExploreOpen(false)} className="block px-4 py-2 text-sm hover:bg-cream/50">Gentle Presence</a>
                                <a href="#earth-textures" onClick={() => setIsExploreOpen(false)} className="block px-4 py-2 text-sm hover:bg-cream/50">Earth Textures</a>
                            </div>
                        )}
                    </div>
                    <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
                    <a href="#blog" className="text-gray-700 hover:text-black transition-colors">Blog</a>
                    <div className="relative group">
                        <button
                            onClick={() => setIsSupportOpen(!isSupportOpen)}
                            className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
                        >
                            Support
                            <svg className={`w-4 h-4 transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isSupportOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fade-in">
                                <a href="#faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream/50">FAQ</a>
                                <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream/50">Contact Us</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Join Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium text-center">
                        Join
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-black p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-cream border-t border-gray-200 py-6 px-6 animate-fade-in">
                    <div className="flex flex-col gap-6">
                        <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">About</a>
                        <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Blog</a>
                        <div className="space-y-4 text-gray-700">
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Explore</p>
                            <a href="#fragile-silence" onClick={() => setIsMobileMenuOpen(false)} className="block">Fragile Silence</a>
                            <a href="#gentle-presence" onClick={() => setIsMobileMenuOpen(false)} className="block">Gentle Presence</a>
                            <a href="#earth-textures" onClick={() => setIsMobileMenuOpen(false)} className="block">Earth Textures</a>
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Support</p>
                            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700">FAQ</a>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 block">Contact Us</a>
                        </div>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-black text-white px-6 py-3 rounded-full text-center font-medium">
                            Join Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
