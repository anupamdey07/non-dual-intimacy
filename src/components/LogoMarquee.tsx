import React from 'react';

const LogoMarquee: React.FC = () => {
    const logos = [
        { name: 'LOGO', icon: '◎' },
        { name: 'EGGS', icon: '🥚' },
        { name: 'THE PAAK', style: 'border' },
        { name: 'IDEA', icon: '💡' },
        { name: '360LAB', icon: '◉' },
        { name: 'LOGO', icon: '◎' },
        { name: 'EGGS', icon: '🥚' },
        { name: 'THE PAAK', style: 'border' },
    ];

    return (
        <section className="py-16 bg-cream border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
                    Joined by 2.5M open hearts
                </p>

                <div className="flex items-center justify-center gap-12 flex-wrap">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-gray-800 font-semibold text-lg"
                        >
                            {logo.icon && <span className="text-2xl">{logo.icon}</span>}
                            <span className={logo.style === 'border' ? 'border-2 border-black px-3 py-1' : ''}>
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
