import emailjs from "emailjs-com";
import { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTimesCircle,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

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

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-[var(--red)]">
        <div className="container-wide">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <p className="section-label mb-4" style={{ color: "var(--black)" }}>Contact</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--white)] uppercase leading-[1.05] mb-6">
                  Say <span className="text-[var(--green)]">hello.</span>
                </h2>
                <p className="text-lg text-[var(--white)]/70 leading-relaxed mb-10">
                  I'm open to internships, freelance and collaborations. Drop a
                  message and I'll get back within a day or two.
                </p>

                <div className="space-y-4 mb-10">
                  <a
                    href="mailto:bandararavin7@gmail.com"
                    className="flex items-center gap-4 group border border-[var(--white)]/20 p-4 hover:border-[var(--green)] transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--black)] flex-shrink-0">
                      <FaEnvelope className="text-[var(--green)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] text-[var(--white)]/50 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-sm font-medium text-[var(--white)] truncate">
                        bandararavin7@gmail.com
                      </p>
                    </div>
                    <FaArrowRight className="text-[var(--white)]/40 group-hover:text-[var(--green)] group-hover:translate-x-1 transition-all" />
                  </a>

                  <div className="flex items-center gap-4 border border-[var(--white)]/20 p-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--black)] flex-shrink-0">
                      <span className="text-[var(--green)] text-sm font-mono font-bold">LK</span>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[var(--white)]/50 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-sm font-medium text-[var(--white)]">
                        Colombo, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--white)]/50 hover:text-[var(--green)] transition-colors">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href="https://www.linkedin.com/in/ravin-bandara-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--white)]/50 hover:text-[var(--green)] transition-colors">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="https://medium.com/@ravinbandara76" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-[var(--white)]/50 hover:text-[var(--green)] transition-colors">
                    <FaMedium className="text-lg" />
                  </a>
                </div>
              </div>

              <div className="bg-[var(--black)] border border-[var(--black-border)] p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-[var(--green)] uppercase tracking-wider mb-2" htmlFor="c-name">
                        Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-transparent border border-[var(--black-border)] text-[var(--white)] text-sm placeholder:text-[var(--white-muted)] focus:border-[var(--green)] focus:outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-[var(--green)] uppercase tracking-wider mb-2" htmlFor="c-email">
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-transparent border border-[var(--black-border)] text-[var(--white)] text-sm placeholder:text-[var(--white-muted)] focus:border-[var(--green)] focus:outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[var(--green)] uppercase tracking-wider mb-2" htmlFor="c-message">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={formData.message}
                      required
                      rows={6}
                      placeholder="Tell me about what you're working on..."
                      className="w-full px-4 py-3 bg-transparent border border-[var(--black-border)] text-[var(--white)] text-sm placeholder:text-[var(--white-muted)] focus:border-[var(--green)] focus:outline-none transition-colors resize-none"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full text-sm font-semibold text-[var(--black)] bg-[var(--green)] px-6 py-3.5 hover:bg-[var(--green-dim)] transition-colors uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>

                  {status.success && (
                    <div className="flex items-center gap-3 p-3 border border-[var(--green)]/30 text-[var(--green)] text-sm">
                      <FaCheckCircle className="flex-shrink-0" />
                      Message sent. I'll be in touch soon.
                    </div>
                  )}

                  {status.error && (
                    <div className="flex items-center gap-3 p-3 border border-[var(--white)]/20 text-[var(--white)] text-sm">
                      <FaTimesCircle className="flex-shrink-0" />
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--black)] border-t border-[var(--black-border)] py-8">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[var(--white-muted)] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Ravin Bandara
          </p>
          <p className="font-mono text-[10px] text-[var(--white-muted)] uppercase tracking-wider">
            Designed & built with care
          </p>
        </div>
      </footer>
    </>
  );
};
