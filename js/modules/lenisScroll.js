const easing = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

const handleScrollButtonClick = (lenis) => (event) => {
  event.preventDefault();
  const targetValue = event.currentTarget.dataset.target;
  const targetId = targetValue ? targetValue.replace("#", "") : "";
  if (!targetId.length) return;

  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  lenis.scrollTo(targetElement, {
    offset: 0,
    immediate: false,
    duration: 3,
    easing,
  });
};

export const initLenisScroll = () => {
  if (typeof Lenis === "undefined") return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", handleScrollButtonClick(lenis));
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};
