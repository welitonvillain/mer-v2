import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  position: "relative",

  width: "100vw",
  height: "100vh",

  ".socialText": {
    color: "$white",
    display: "none",
    position: "absolute",
    right: "45px",
    top: "calc(50% + 5rem)",
    transform: "rotate(180deg) translateY(85%)",
    writingMode: "vertical-lr",
    zIndex: 10,

    gap: "1rem",

    "a:hover": {
      color: "$yellow",
    },

    "@media (min-width: 1024px)": {
      display: "flex",
    },
  },
});

export const ImageContainer = styled("section", {
  display: "flex",
  width: "100vw",
  height: "100vh",

  position: "relative",

  ".gradient": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.9094231442577031) 7%, rgba(0,0,0,0.6993391106442577) 50%, rgba(0,0,0,0.8) 93%)",
    pointerEvents: "none",
  },

  img: {
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
  },
});

export const Main = styled("section", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",

  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",

  overflow: "hidden",

  paddingTop: "4.5rem",

  ".social": {
    display: "flex",
    width: "100%",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",

    marginTop: "2rem",

    svg: {
      color: "$white",
      fontSize: "1.5rem",
      cursor: "pointer",
    },

    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
});

export const Presentation = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  margin: "0 auto",

  padding: "1rem",
  gap: "1.5rem",

  h1: {
    color: "$white",
    fontSize: "3rem",
    lineHeight: "3.25rem",
  },

  span: {
    fontFamily: "Montserrat",
    color: "$white",
    fontWeight: "300",
    fontSize: "1rem",
    lineHeight: "1.75rem",
  },

  "@media (min-width: 500px)": {
    h1: {
      fontSize: "4rem",
      lineHeight: "4.25rem",
    },
  },

  "@media (min-width: 800px)": {
    width: "70%",
  },

  "@media (min-width: 1024px)": {
    h1: {
      fontSize: "6rem",
      lineHeight: "6.25rem",
    },

    span: {
      width: "90%",
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
  },

  "@media (min-width: 1500px)": {
    h1: {
      fontSize: "7rem",
      lineHeight: "7.25rem",
    },

    span: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
    },
  },
});

export const Action = styled("div", {
  display: "flex",
  width: "100%",
  gap: "0.75rem",
  marginTop: "3rem",
  height: "50px",

  ".quote": {
    display: "flex",
    fontFamily: "Montserrat",
    width: "100%",
    maxWidth: "400px",
    border: "none",
    color: "$white",
    background: "$yellow",
    borderRadius: "8px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "600",
    padding: "0 1rem",
    textAlign: "center",
    gap: "1rem",

    svg: {
      fontSize: "1.25rem",
    },

    transition: "all 0.2s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$hYellow",
    },
  },

  ".whats": {
    display: "flex",
    border: "2px solid $yellow",
    color: "$white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    fontSize: "1.25rem",
    padding: "0 0.75rem",
    textAlign: "center",

    transition: "all 0.2s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$yellow",
    },
  },

  ".mail": {
    display: "flex",
    border: "2px solid $yellow",
    color: "$white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    fontSize: "1.25rem",
    padding: "0 0.75rem",
    textAlign: "center",

    transition: "all 0.2s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$yellow",
    },
  },
});
