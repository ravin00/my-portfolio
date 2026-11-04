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
      <section id="contact" className="py-24 md:py-32 bg-[var(--white)]">
        <div className="container-wide">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <p className="section-label mb-4">Contact</p>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[var(--text)] uppercase leading-[1.05] mb-6">
                  Say <span className="text-[var(--red)]">hello.</span>
                </h2>
                <p className="text-lg text-[var(--text-dim)] leading-relaxed mb-10">
                  I'm open to internships, freelance and collaborations. Drop a
                  message and I'll get back within a day or two.
                </p>

                <div className="space-y-4 mb-10">
                  <a
                    href="mailto:bandararavin7@gmail.com"
                    className="flex items-center gap-4 group border border-[var(--gray-border)] p-4 hover:border-[var(--red)] transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--red)] flex-shrink-0">
                      <FaEnvelope className="text-[var(--white)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-pixel text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-sm font-medium text-[var(--text)] truncate">
                        bandararavin7@gmail.com
                      </p>
                    </div>
                    <FaArrowRight className="text-[var(--text-muted)] group-hover:text-[var(--red)] group-hover:translate-x-1 transition-all" />
                  </a>

                  <div className="flex items-center gap-4 border border-[var(--gray-border)] p-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--red)] flex-shrink-0">
                      <span className="text-[var(--white)] text-sm font-display">LK</span>
                    </div>
                    <div>
                      <p className="font-pixel text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-sm font-medium text-[var(--text)]">
                        Colombo, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a href="https://github.com/ravin00" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-muted)] hover:text-[var(--red)] transition-colors">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href="https://www.linkedin.com/in/ravin-bandara-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-muted)] hover:text-[var(--red)] transition-colors">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="https://medium.com/@ravinbandara76" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-[var(--text-muted)] hover:text-[var(--red)] transition-colors">
                    <FaMedium className="text-lg" />
                  </a>
                </div>
              </div>

              <div className="bg-[var(--white-bg)] border border-[var(--gray-border)] p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-pixel text-[10px] text-[var(--red)] uppercase tracking-wider mb-2" htmlFor="c-name">
                        Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[var(--white)] border border-[var(--gray-border)] text-[var(--text)] text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--red)] focus:outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-pixel text-[10px] text-[var(--red)] uppercase tracking-wider mb-2" htmlFor="c-email">
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-[var(--white)] border border-[var(--gray-border)] text-[var(--text)] text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--red)] focus:outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-pixel text-[10px] text-[var(--red)] uppercase tracking-wider mb-2" htmlFor="c-message">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={formData.message}
                      required
                      rows={6}
                      placeholder="Tell me about what you're working on..."
                      className="w-full px-4 py-3 bg-[var(--white)] border border-[var(--gray-border)] text-[var(--text)] text-sm placeholder:text-[var(--text-muted)] focus:border-[var(--red)] focus:outline-none transition-colors resize-none"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full text-sm font-semibold text-[var(--white)] bg-[var(--red)] px-6 py-3.5 hover:bg-[var(--red-dark)] transition-colors uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </button>

                  {status.success && (
                    <div className="flex items-center gap-3 p-3 border border-[var(--green)]/30 text-[var(--green-dim)] text-sm">
                      <FaCheckCircle className="flex-shrink-0" />
                      Message sent. I'll be in touch soon.
                    </div>
                  )}

                  {status.error && (
                    <div className="flex items-center gap-3 p-3 border border-[var(--red)]/30 text-[var(--red)] text-sm">
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
      <footer className="bg-[var(--white-bg)] border-t border-[var(--gray-border)] py-8">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-pixel text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Ravin Bandara
          </p>
          <p className="font-pixel text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            Designed & built with care
          </p>
        </div>
      </footer>
    </>
  );
};
