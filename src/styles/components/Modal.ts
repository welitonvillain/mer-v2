import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",

  position: "fixed",
  width: "100vw",
  height: "100vh",
  left: "0",
  top: "0",

  zIndex: 9999,

  div: {
    width: "100%",
    height: "100%",
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "8px",

    boxShadow: "0px 0px 19px 8px rgba(0,0,0,0.1)",

    svg: {
      position: "absolute",
      right: "3rem",
      top: "3rem",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      color: "$black",
      cursor: "pointer",

      "&:hover": {
        color: " $yellow",
      },

      "@media (min-width: 300px)": {
        right: "1.5rem",
        top: "1.5rem",
      },
    },

    iframe: {
      border: "0",
      height: "100%",
      width: "100%",
    },

    "@media (min-width: 300px)": {
      padding: "3.5rem 1rem",
    },
  },

  "@media (min-width: 300px)": {
    padding: "0.75rem",
  },
});
