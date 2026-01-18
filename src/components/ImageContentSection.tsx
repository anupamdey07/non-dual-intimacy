import React from 'react';

const ImageContentSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-warm-beige">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6 animate-slide-up">
                    <p className="text-gray-600 leading-relaxed max-w-lg">
                        Step into a world where every moment is an invitation to connect—where warmth,
                        poetry, and presence blend into a tapestry of shared experience. Here, intimacy
                        is an art, and you are always welcome.
                    </p>
                </div>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-amber-200 to-orange-200">
                    <img
                        src="/conversation-image.jpg"
                        alt="Two people in conversation"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ImageContentSection;
