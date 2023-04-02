export const openMaps = () => {
  const opened = window.open(
    "https://maps.google.com/?q=51.519731148445125,-0.6378115177911474"
  );
  if (opened) {
    opened.opener = null;
  }
};
