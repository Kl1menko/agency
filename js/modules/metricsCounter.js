const animateValue = (el, target, suffix, duration) => {
  const start = 0;
  const startTime = performance.now();

  const frame = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + (target - start) * progress);
    el.textContent = `${value}${suffix || ""}`;

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

export const initMetricsCounter = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.dataset.done === "true") return;

          const target = parseInt(el.dataset.target, 10) || 0;
          const suffix = el.dataset.suffix || "";

          el.classList.add("in-view");
          animateValue(el, target, suffix, 1200);

          el.dataset.done = "true";
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  });
};
