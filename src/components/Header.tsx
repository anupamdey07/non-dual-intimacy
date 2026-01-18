import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">✦</span>
                    </div>
                    <span className="font-semibold text-lg">Nondual Intimacy</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors">
                            Explore
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
                    <a href="#blog" className="text-gray-700 hover:text-black transition-colors">Blog</a>
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors">
                            Support
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Join Button */}
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium">
                    Join
                </button>
            </nav>
        </header>
    );
};

export default Header;
