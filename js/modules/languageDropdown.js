const swapLanguage = (wrapper, dropdownToggle, currentLang) => {
  if (dropdownToggle.getAttribute("lang") === currentLang) return;

  const activeLink = wrapper.querySelector(`[lang=${currentLang}]`);
  if (!activeLink) return;

  const toggleText = dropdownToggle.textContent;
  const activeText = activeLink.textContent;

  dropdownToggle.querySelector("div").textContent = activeText;
  activeLink.textContent = toggleText;

  const toggleLang = dropdownToggle.getAttribute("lang");
  dropdownToggle.setAttribute("lang", currentLang);
  activeLink.setAttribute("lang", toggleLang);
};

export const initLanguageDropdown = () => {
  const wrapper = document.querySelector(".wg-element-wrapper.sw5");
  if (!wrapper) return;

  const dropdownToggle = wrapper.querySelector(".w-dropdown-toggle");
  const langLinks = wrapper.querySelectorAll("[lang]");

  if (!dropdownToggle || !langLinks.length) return;
  if (typeof Weglot === "undefined") return;

  Weglot.on("initialized", () => {
    swapLanguage(wrapper, dropdownToggle, Weglot.getCurrentLang());
  });

  langLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const lang = link.getAttribute("lang");
      if (!lang) return;

      Weglot.switchTo(lang);
      swapLanguage(wrapper, dropdownToggle, lang);
    });
  });
};
