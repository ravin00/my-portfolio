import emailjs from "emailjs-com";
import { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
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
        setTimeout(
          () => setStatus({ loading: false, success: false, error: false }),
          5000
        );
      })
      .catch(() => {
        setStatus({ loading: false, success: false, error: true });
        setTimeout(
          () => setStatus({ loading: false, success: false, error: false }),
          5000
        );
      });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[var(--bg-subtle)]">
      <div className="container-tight">
        <RevealOnScroll>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] mb-6">
                Let's build something worth shipping.
              </h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-10">
                I'm open to internships, freelance and collaborations. Drop a
                message and I'll get back within a day or two.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="mailto:bandararavin7@gmail.com"
                  className="card p-4 flex items-center gap-4 bg-white group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-muted)] flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[var(--text)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[var(--text-subtle)] font-mono uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-medium text-[var(--text)] truncate">
                      bandararavin7@gmail.com
                    </p>
                  </div>
                  <FaArrowRight className="text-[var(--text-subtle)] group-hover:text-[var(--text)] group-hover:translate-x-1 transition-all" />
                </a>

                <div className="card p-4 flex items-center gap-4 bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-muted)] flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[var(--text)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-subtle)] font-mono uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-medium text-[var(--text)]">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ravin00"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravin-bandara-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="card-elevated p-6 sm:p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label" htmlFor="c-name">
                      Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      required
                      placeholder="Your name"
                      className="input"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="c-email">
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      required
                      placeholder="you@example.com"
                      className="input"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="c-message">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    value={formData.message}
                    required
                    rows={6}
                    placeholder="Tell me a little about what you're working on…"
                    className="textarea resize-none"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message <FaArrowRight className="text-xs" />
                    </>
                  )}
                </button>

                {status.success && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                    <FaCheckCircle className="flex-shrink-0" />
                    Message sent. I'll be in touch soon.
                  </div>
                )}

                {status.error && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                    <FaTimesCircle className="flex-shrink-0" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </RevealOnScroll>

        <footer className="mt-24 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-subtle)]">
            © {new Date().getFullYear()} Ravin Bandara. All rights reserved.
          </p>
          <p className="text-xs font-mono text-[var(--text-subtle)]">
            Designed & built with care.
          </p>
        </footer>
      </div>
    </section>
  );
};
