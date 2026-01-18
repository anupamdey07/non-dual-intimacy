import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center items-center">
            <div className="max-w-5xl mx-auto text-center">
                {/* Small heading */}
                <p className="text-sm text-blue-600 mb-8 tracking-wide uppercase">
                    01 heading hero
                </p>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight animate-fade-in">
                    Intimacy,
                    <br />
                    reimagined through
                    <br />
                    gentle presence
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all hover:scale-105 font-medium">
                        Browse
                    </button>
                    <button className="bg-white text-black px-8 py-3 rounded-full border-2 border-black hover:bg-gray-50 transition-all hover:scale-105 font-medium">
                        Join
                    </button>
                </div>
            </div>

            {/* Hero Image Preview */}
            <div className="mt-16 w-full max-w-4xl">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-amber-100 to-amber-200">
                    <img
                        src="/hero-image.jpg"
                        alt="Warm interior with natural light"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
