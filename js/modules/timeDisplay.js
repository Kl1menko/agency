const TIME_VERSION_ONE_SELECTOR = '[fs-hacks-element="time-version1"]';
const TIME_VERSION_TWO_SELECTOR = '[fs-hacks-element="time-version2"]';

const timeFormat = {
  timeZone: "America/Sao_Paulo",
  hour12: true,
  hour: "numeric",
  minute: "numeric",
};

const updateTime = () => {
  const timeVersionOne = document.querySelector(TIME_VERSION_ONE_SELECTOR);
  const timeVersionTwo = document.querySelector(TIME_VERSION_TWO_SELECTOR);

  if (!timeVersionOne || !timeVersionTwo) return;

  const formattedTime = new Date().toLocaleTimeString("en-US", timeFormat);
  timeVersionOne.textContent = formattedTime;
  timeVersionTwo.textContent = formattedTime;
};

export const initTimeDisplay = () => {
  document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 2000);
  });
};
