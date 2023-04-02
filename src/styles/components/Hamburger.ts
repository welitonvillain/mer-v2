import { styled } from "..";

export const Container = styled("section", {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6209077380952381) 100%)",
  backdropFilter: "blur(3px)",

  fontFamily: "Montserrat",

  opacity: 0,
  pointerEvents: "none",

  svg: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    cursor: "pointer",
    transition: "all 0.2s",
    color: "$white",

    "&:hover": {
      color: "$yellow",
    },
  },

  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",

    fontWeight: "bolder",

    a: {
      color: "$white",
      transition: "all 0.2s",

      "&:hover": {
        color: "$yellow",
      },
    },
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        pointerEvents: "auto",
      },
    },
  },
});
