import React, { useRef } from 'react';

const PhotographyShowcase: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            id: 'fragile-silence',
            title: 'Fragile Silence',
            description: 'The beauty of stillness in the mundane.',
            image: '/photo_silence_1768770430061.png'
        },
        {
            id: 'gentle-presence',
            title: 'Gentle Presence',
            description: 'Capturing the unseen breath of the world.',
            image: '/photo_presence_1768770445656.png'
        },
        {
            id: 'earth-textures',
            title: 'Earth Textures',
            description: 'Stories written in stone and moss.',
            image: '/photo_texture_1768770457741.png'
        }
    ];

    return (
        <section id="photography" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Photography Projects</h2>
                <p className="text-gray-600 max-w-2xl">
                    A collection of visual meditations, exploring the intimacy between the observer and the observed.
                </p>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto px-6 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        id={project.id}
                        className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center"
                    >
                        <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[4/5] bg-dark-beige">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
                            </div>
                            {/* Static content for mobile or no-hover */}
                            <div className="absolute bottom-4 left-4 right-4 md:hidden">
                                <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-gray-200 text-xs">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-center gap-4 md:hidden">
                <p className="text-xs text-gray-500 italic">Swipe to explore projects →</p>
            </div>
        </section>
    );
};

export default PhotographyShowcase;
