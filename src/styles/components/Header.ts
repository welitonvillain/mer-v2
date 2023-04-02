import { styled } from "..";

export const Container = styled("header", {
  display: "flex",
  width: "100vw",
  height: "5rem",
  padding: "1rem 1rem",
  fontFamily: "Montserrat",
  justifyContent: "space-between",

  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 3,

  svg: {
    cursor: "pointer",
    color: "$white",

    "&:hover": {
      color: "$yellow",
    },

    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
});

export const Logo = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    width: "80px",
  },

  "@media (min-width: 640px)": {
    width: "100px",
  },
});

export const Menu = styled("div", {
  width: "100%",
  padding: "0 2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5rem",
  color: "$white",

  fontWeight: "700",
  fontSize: "0.85rem",
  whiteSpace: "nowrap",

  a: {
    cursor: "pointer",

    "&:hover": {
      color: "$yellow",
      transition: "all 0.25s",
    },
  },

  display: "none",

  "@media (min-width: 1024px)": {
    display: "flex",
  },
});

export const Contact = styled("div", {
  width: "20%",

  a: {
    display: "flex",
    width: "100%",
    minWidth: "200px",
    border: "none",
    color: "$white",
    background: "$yellow",
    borderRadius: "8px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",

    transition: "all 0.2s",

    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$hYellow",
    },
  },

  display: "none",

  "@media (min-width: 1024px)": {
    display: "flex",
  },
});
