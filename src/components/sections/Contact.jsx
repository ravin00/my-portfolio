import emailjs from "emailjs-com";
import { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaTimesCircle,} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false });

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                setStatus({ loading: false, success: true, error: false });
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus({ loading: false, success: false, error: false }), 5000);
            })
            .catch(() => {
                setStatus({ loading: false, success: false, error: true });
                setTimeout(() => setStatus({ loading: false, success: false, error: false }), 5000);
            });
    };

    const contactJokes = [
        "I promise I respond faster than my code compiles ⚡",
        "No spam, just RAM... wait, that's not right 🤔",
        "Let's build something awesome together! 🚀",
    ];

    return (
        <section id="contact" className="py-24 relative">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-5xl md:text-6xl text-gray-800 cartoon-text mb-4">
                            LET'S CONNECT!
                        </h2>
                        <p className="font-funky text-xl text-gray-700 mb-4">
                            Ping me, don't pong me! 🏓
                        </p>
                        <div className="joke-card inline-block">
                            <p className="font-body text-gray-800">
                                "{contactJokes[Math.floor(Math.random() * contactJokes.length)]}"
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left - Contact Info */}
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="cartoon-card p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-3xl text-purple-500" />
                                    <div>
                                        <h3 className="font-funky text-lg font-bold text-gray-800">Email</h3>
                                        <a href="mailto:bandararavin7@gmail.com" className="font-body text-purple-600 hover:underline">
                                            bandararavin7@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="cartoon-card p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                                <div className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="text-3xl text-cyan-500" />
                                    <div>
                                        <h3 className="font-funky text-lg font-bold text-gray-800">Location</h3>
                                        <p className="font-body text-gray-700">Colombo, Sri Lanka 🇱🇰</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Card
                            <div className="cartoon-card-colored p-6">
                                <h3 className="font-funky text-xl font-bold text-white mb-4">
                                    Find me on the interwebs! 🌐
                                </h3>
                                <div className="flex gap-4">
                                    <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer"
                                        className="cartoon-card bg-white w-14 h-14 flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                                        <FaGithub />
                                    </a>
                                    <a href="https://linkedin.com/in/ravinbandara" target="_blank" rel="noopener noreferrer"
                                        className="cartoon-card bg-white w-14 h-14 flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                                        <FaLinkedin className="text-blue-600" />
                                    </a>
                                    <a href="https://twitter.com/ravinbandara" target="_blank" rel="noopener noreferrer"
                                        className="cartoon-card bg-white w-14 h-14 flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                                        <FaTwitter className="text-cyan-500" />
                                    </a>
                                </div>
                            </div> */}

                            {/* Fun Stats */}
                            <div className="cartoon-card p-6 bg-gradient-to-r from-yellow-50 to-orange-50">
                                <h3 className="font-funky text-lg font-bold text-gray-800 mb-4">Fun Stats</h3>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-3xl mb-1">☕</div>
                                        <p className="font-funky text-2xl font-bold text-orange-500">999+</p>
                                        <p className="text-sm text-gray-600">Coffees</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl mb-1">💻</div>
                                        <p className="font-funky text-2xl font-bold text-purple-500">1000+</p>
                                        <p className="text-sm text-gray-600">Commits</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl mb-1">🐛</div>
                                        <p className="font-funky text-2xl font-bold text-red-500">∞</p>
                                        <p className="text-sm text-gray-600">Bugs Fixed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Contact Form */}
                        <div className="cartoon-card p-8 bg-white">
                            <h3 className="font-heading text-3xl text-gray-800 mb-2">
                                DROP A MESSAGE 💌
                            </h3>
                            <p className="font-body text-gray-600 mb-6">
                                I'll get back to you faster than <code className="bg-gray-100 px-2 py-1 rounded">npm install</code>!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block font-funky font-bold text-gray-700 mb-2">
                                        Your Name 👤
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border-3 border-gray-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 font-body transition-all"
                                        style={{ borderWidth: '3px' }}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block font-funky font-bold text-gray-700 mb-2">
                                        Your Email 📧
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 border-3 border-gray-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 font-body transition-all"
                                        style={{ borderWidth: '3px' }}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block font-funky font-bold text-gray-700 mb-2">
                                        Your Message 💬
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your awesome project..."
                                        className="w-full px-4 py-3 border-3 border-gray-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 font-body resize-none transition-all"
                                        style={{ borderWidth: '3px' }}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className="w-full btn-funky py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status.loading ? (
                                        <>
                                            <span className="animate-spin">🔄</span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message! 🚀
                                        </>
                                    )}
                                </button>

                                {/* Status Messages */}
                                {status.success && (
                                    <div className="cartoon-card p-4 bg-green-100 border-green-500 flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500 text-2xl" />
                                        <span className="font-funky font-bold text-green-700">Message sent! I'll reply ASAP! 🎉</span>
                                    </div>
                                )}

                                {status.error && (
                                    <div className="cartoon-card p-4 bg-red-100 border-red-500 flex items-center gap-3">
                                        <FaTimesCircle className="text-red-500 text-2xl" />
                                        <span className="font-funky font-bold text-red-700">Oops! Something broke. Try again? 🔧</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-20 text-center">
                        <div className="cartoon-card inline-block p-6 bg-white">
                            <p className="font-funky text-lg text-gray-700 mb-2">
                                Designed & Built with <span className="text-red-500">❤️</span> and lots of <span>☕</span>
                            </p>
                            <p className="font-heading text-2xl text-gray-800">
                                by<span className="gradient-text-rainbow">RAVIN</span>
                            </p>
                            <p className="font-body text-gray-500 mt-2">© 2024 • All rights reserved (and some bugs too)</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
