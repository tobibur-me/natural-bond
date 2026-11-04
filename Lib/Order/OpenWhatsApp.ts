// Must run directly inside the click handler, or popup blockers will stop it.
// Facebook and Instagram's in-app browsers may refuse a new tab, so fall back to this one.
const openWhatsApp = (url: string) => {
  const opened = window.open(url, "_blank");

  if (opened) {
    opened.opener = null;
    return;
  }

  window.location.href = url;
};

export default openWhatsApp;
