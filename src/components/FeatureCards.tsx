import React from 'react';

const FeatureCards: React.FC = () => {
    const handleNavigation = (projectId: string) => {
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section className="py-20 px-6 bg-cream">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Card 1 - Fragile Silence */}
                <div
                    onClick={() => handleNavigation('fragile-silence')}
                    className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                >
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">
                        An open doorway
                    </p>
                    <h3 className="text-3xl font-bold mb-6">
                        Fragile Silence
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        The beauty of stillness in the mundane. Experience moments of quiet presence.
                    </p>
                    <span className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all">
                        Explore
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>

                {/* Card 2 - Gentle Presence */}
                <div
                    onClick={() => handleNavigation('gentle-presence')}
                    className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                >
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">
                        A shared pause
                    </p>
                    <h3 className="text-3xl font-bold mb-6">
                        Gentle Presence
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Capturing the unseen breath of the world. Feel with every sense.
                    </p>
                    <span className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all">
                        Explore
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>

                {/* Card 3 - Earth Textures */}
                <div
                    onClick={() => handleNavigation('earth-textures')}
                    className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                >
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">
                        Wonder woven
                    </p>
                    <h3 className="text-3xl font-bold mb-6">
                        Earth Textures
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Stories written in stone and moss. Connection through touch and presence.
                    </p>
                    <span className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all">
                        Explore
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
