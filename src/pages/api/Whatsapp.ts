const WHATSAPP_URL = "https://wa.me/";
const WHATSAPP_NUMBER = "4407397873825";
const WHATSAPP_MESSAGE =
  "Hello%2C%20I%20would%20like%20to%20better%20understand%20the%20services%20offered%20and%20the%20prices.";

export const openWhatsapp = (): void => {
  const opened = window.open(
    WHATSAPP_URL + WHATSAPP_NUMBER + "/?text=" + WHATSAPP_MESSAGE,
    "_blank"
  );
  if (opened) {
    opened.opener = null;
  }
};
