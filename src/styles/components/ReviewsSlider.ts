import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "400px",

  padding: "0 0.5rem",

  ".contentContainer": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    background: "$gray",
    borderRadius: "12px",
    justifyContent: "space-between",
    padding: "2rem 1rem",
    textAlign: "center",

    border: "2px solid $yellow",

    ".content": {
      fontFamily: "Montserrat",
      lineHeight: "1.75rem",
    },

    ".footer": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",

      ".stars": {
        display: "flex",
        flexDirection: "row",
        fontSize: "1.25rem",
        color: "$yellow",
      },

      ".author": {
        fontWeight: "bold",
        whiteSpace: "nowrap",
      },
    },
  },

  "@media (min-width: 600px)": {
    height: "420px",
  },
});
