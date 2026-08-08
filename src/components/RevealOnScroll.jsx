import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, className = "", stagger = false, delayStep = 70 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          if (stagger) {
            const items = node.querySelectorAll("[data-stagger-item]");
            items.forEach((el, i) => {
              el.style.transitionDelay = `${i * delayStep}ms`;
              el.classList.add("stagger-in");
            });
          }
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stagger, delayStep]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};
