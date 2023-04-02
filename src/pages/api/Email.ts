const EMAIL_ADDRESS = "exclusiveremoval@gmail.com";
const EMAIL_TITLE = "Quotation";
const EMAIL_MESSAGE =
  "Hello%2C%20I%20would%20like%20to%20better%20understand%20the%20services%20offered%20and%20the%20prices.";

export const sendEmail = () => {
  const opened = window.open(
    "mailto:" +
      EMAIL_ADDRESS +
      "?subject=" +
      EMAIL_TITLE +
      "&body=" +
      EMAIL_MESSAGE
  );
  if (opened) {
    opened.opener = null;
  }
};
