export const openFacebook = () => {
  const opened = window.open(
    "https://www.facebook.com/profile.php?id=100063697292866"
  );
  if (opened) {
    opened.opener = null;
  }
};
