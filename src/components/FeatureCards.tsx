import React from 'react';

const FeatureCards: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-cream">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Card 1 - Text Card */}
                <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-shadow">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">
                        An open doorway
                    </p>
                    <h3 className="text-3xl font-bold mb-6">
                        Feel with every sense
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Experience how mindful presence turns each moment into a living poem.
                        Here, connection is an invitation—soft, genuine, and always shared.
                    </p>
                    <a href="#hero" className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all">
                        Begin
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                {/* Card 2 - Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow aspect-square bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200">
                    <img
                        src="/serene-landscape.jpg"
                        alt="Wonder woven between us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                        <p className="text-xs uppercase tracking-wide mb-2 opacity-80">
                            A shared pause
                        </p>
                        <h3 className="text-2xl font-semibold">
                            Wonder woven between us
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
