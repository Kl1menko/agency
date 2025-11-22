const toggleClassOnClick = (triggerSelector, targetSelector, className, add) => {
  document.querySelectorAll(triggerSelector).forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document.querySelectorAll(targetSelector).forEach((target) => {
        target.classList[add ? "add" : "remove"](className);
      });
    });
  });
};

export const initScrollLocks = () => {
  document.addEventListener("DOMContentLoaded", () => {
    toggleClassOnClick(".open-modal", "body", "no-scroll", true);
    toggleClassOnClick(".close-modal", "body", "no-scroll", false);
    toggleClassOnClick(".open-nav-pill", "._23-nav_pill-wrapper", "no-scroll-pill", true);
    toggleClassOnClick(".close-nav-pill", "._23-nav_pill-wrapper", "no-scroll-pill", false);
  });
};
