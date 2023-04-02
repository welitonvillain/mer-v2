import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  "html, body": {
    height: "100vh",
    maxWidth: "100vw",
    overflowX: "hidden",
    fontFamily: "Poppins",
  },

  body: {
    backgroundColor: "$black",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "::-webkit-scrollbar-track": {
    display: "none",
  },

  "::-webkit-scrollbar": {
    display: "none",
  },

  "::-webkit-scrollbar-thumb": {
    display: "none",
  },
});
