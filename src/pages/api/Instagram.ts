export const openInstagram = () => {
  const opened = window.open("https://www.instagram.com/myexclusiveremovals/");
  if (opened) {
    opened.opener = null;
  }
};
