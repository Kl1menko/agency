const addRevealEffect = (cards) => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => {
    card.classList.add("reveal-up");
    observer.observe(card);
  });
};

export const initTestimonialsReveal = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".testimonial-card"));
    if (!cards.length) return;
    addRevealEffect(cards);
  });
};
