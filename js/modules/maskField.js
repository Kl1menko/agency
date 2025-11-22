const applyMaskIfReady = () => {
  if (!window.jQuery || !jQuery.fn.mask) return false;

  jQuery(() => {
    jQuery("#valueField").mask("9.999");
  });

  return true;
};

export const initMaskField = () => {
  if (applyMaskIfReady()) return;

  const maskInterval = setInterval(() => {
    if (applyMaskIfReady()) {
      clearInterval(maskInterval);
    }
  }, 100);
};
