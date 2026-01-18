import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-warm-beige">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    We're here to listen, reflect, and welcome your stories. Every message is a new beginning.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Email Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Send a message</h3>
                        <p className="text-sm text-gray-600 mb-4">Share your thoughts or poetry with us.</p>
                        <a href="mailto:hello@nondualintimacy.com" className="text-sm font-medium hover:underline">
                            hello@nondualintimacy.com
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Give us a call</h3>
                        <p className="text-sm text-gray-600 mb-4">We're here for heartfelt conversations.</p>
                        <a href="tel:+15550000000" className="text-sm font-medium hover:underline">
                            +1 (555) 000-0000
                        </a>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Stop by in person</h3>
                        <p className="text-sm text-gray-600 mb-4">Our space is open for you.</p>
                        <p className="text-sm font-medium">
                            101 Web Lane, SF, CA
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
