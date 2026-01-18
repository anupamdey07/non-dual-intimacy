import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log('Subscribing:', email);
            setIsSubscribed(true);
            setEmail('');
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubscribed(false), 5000);
        }
    };

    return (
        <footer className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-5 gap-12 mb-12">
                    {/* Logo and Brand */}
                    <div className="md:col-span-1">
                        <a href="#hero" className="flex items-center gap-2 mb-4 group">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                <span className="text-black text-xl">✦</span>
                            </div>
                            <div className="transition-opacity group-hover:opacity-80">
                                <div className="font-semibold text-sm">NONDUAL</div>
                                <div className="font-semibold text-sm">INTIMACY</div>
                            </div>
                        </a>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Explore</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#poetry" className="hover:text-white transition-colors">Poetry</a></li>
                            <li><a href="#visuals" className="hover:text-white transition-colors">Visuals</a></li>
                            <li><a href="#stories" className="hover:text-white transition-colors">Stories</a></li>
                            <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Connect</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
                            <li><a href="#circle" className="hover:text-white transition-colors">Circle</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Discover */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Discover</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#inspire" className="hover:text-white transition-colors">Inspire</a></li>
                            <li><a href="#reflections" className="hover:text-white transition-colors">Reflections</a></li>
                            <li><a href="#practice" className="hover:text-white transition-colors">Practice</a></li>
                            <li><a href="#guides" className="hover:text-white transition-colors">Guides</a></li>
                            <li><a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div id="newsletter">
                        <h4 className="font-semibold mb-4 text-sm">Subscribe</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Receive warmth, poetry, and gentle updates.
                        </p>
                        {isSubscribed ? (
                            <div className="bg-white/10 border border-green-500/50 rounded-lg p-4 animate-fade-in">
                                <p className="text-sm text-green-400">Thank you for subscribing! ✨</p>
                            </div>
                        ) : (
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:border-white/40 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors active:scale-95 transition-transform"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                        <p className="text-xs text-gray-500 mt-3">
                            See our <a href="#privacy" className="underline hover:text-white">privacy policy</a>.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>All rights reserved © 2025</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#facebook" className="hover:text-white transition-colors font-medium hover:scale-110 transition-transform">Facebook</a>
                        <a href="#instagram" className="hover:text-white transition-colors font-medium hover:scale-110 transition-transform">Instagram</a>
                        <a href="#twitter" className="hover:text-white transition-colors font-medium hover:scale-110 transition-transform">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
