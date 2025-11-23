const CUSTOM_CURSOR_AREAS = [
  "._23-services-bloc.websites",
  "._23-services-bloc.produtos",
  "._23-services-bloc.branding",
];

const setVisible = (wrapper, visible) => {
  wrapper.classList.toggle("visible", visible);
};

const moveCursor = (wrapper, x, y) => {
  wrapper.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

export const initCursorTracker = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-wrapper");
    if (!cursor) return;

    const areas = Array.from(
      document.querySelectorAll(CUSTOM_CURSOR_AREAS.join(","))
    );
    if (!areas.length) return;

    const hideCursor = () => setVisible(cursor, false);
    const showCursor = () => setVisible(cursor, true);

    let active = false;

    const handleMove = (event) => {
      if (!active) return;
      moveCursor(cursor, event.clientX, event.clientY);
    };

    const activate = () => {
      active = true;
      showCursor();
      document.addEventListener("mousemove", handleMove);
    };

    const deactivate = () => {
      active = false;
      hideCursor();
      document.removeEventListener("mousemove", handleMove);
    };

    areas.forEach((area) => {
      area.classList.add("custom-cursor-area");
      area.addEventListener("mouseenter", activate);
      area.addEventListener("mouseleave", deactivate);
    });

    hideCursor();
  });
};
