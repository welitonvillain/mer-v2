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

  position: "relative",

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

  "@media (min-width: 1024px)": {
    width: "70%",

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
    width: "70%",

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
    border: "2px solid $yellow",
    color: "$white",
    background: "rgb(19,19,19,0.3)",
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
    background: "rgb(19,19,19,0.3)",
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
    background: "rgb(19,19,19,0.3)",
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

// CONTENT

export const Content = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100%",
  background: "$white",
  color: "$black",

  padding: "2rem 1rem",

  ".title": {
    display: "flex",
    width: "100%",
    height: "100px",
    marginBottom: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
    color: "$blackGray",

    fontWeight: "700",
    fontSize: "1.5rem",
    textAlign: "center",
  },

  userSelect: "none",

  "@media (min-width: 600px)": {
    ".title": {
      marginBottom: "2rem",
      marginTop: "0.5rem",
      fontSize: "2rem",
    },
  },

  "@media (min-width: 1024px)": {
    ".title": {
      marginBottom: "5rem",
      marginTop: "2rem",
      fontSize: "3rem",
    },
  },
});

export const About = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",

  margin: "0 auto",

  ".content": {
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    width: "100%",
    height: "400px",
    padding: "1rem",

    gap: "2rem",

    span: {
      fontWeight: "700",
      fontSize: "2rem",
    },

    p: {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: "1rem",
      lineHeight: "1.75rem",

      "@media (min-width: 1024px)": {
        fontSize: "1.06rem",
      },
    },

    ".separator": {
      borderRadius: "4px",
      height: "2px",
      width: "40%",
      background: "$yellow",
    },

    "@media (min-width: 1024px)": {
      width: "58.33333333%",
      padding: "1.5rem",
    },

    "@media (min-width: 1240px)": {
      width: "41.66666667%",
      padding: "1.5rem",
    },
  },

  ".first-image": {
    display: "flex",
    width: "100%",
    padding: "1rem",

    img: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "12px",
    },

    "@media (min-width: 1024px)": {
      width: "41.66666667%",
      marginLeft: "auto",
    },
  },

  ".second-image": {
    display: "flex",
    width: "100%",
    padding: "1rem",

    img: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "12px",
    },

    "@media (min-width: 1024px)": {
      width: "58.33333333%",
    },
  },

  ".third-image": {
    display: "flex",
    width: "100%",
    padding: "1rem",

    img: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "12px",
    },

    "@media (min-width: 1024px)": {
      width: "41.66666667%",
    },
  },

  "@media (min-width: 600px)": {
    width: "80%",
  },

  "@media (min-width: 1024px)": {
    flexDirection: "row",
  },
});

export const Fact = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "260px",
  borderRadius: "12px",
  background: "$black",

  padding: "2rem 1rem",
  margin: "4rem auto",
  marginTop: "6rem",

  color: "$white",

  ".factTitle": {
    fontWeight: "700",
    fontSize: "2.25rem",
    marginBottom: "1rem",

    "@media (min-width: 1024px)": {
      marginBottom: "0",
      fontSize: "2.5rem",
    },
  },

  ".fact": {
    display: "flex",
    alignItems: "baseline",

    ".plus": {
      fontWeight: "700",
      fontSize: "2.25rem",
      color: "$yellow",
      marginRight: "0.5rem",

      "@media (min-width: 1024px)": {
        fontSize: "2.5rem",
      },
    },

    ".number": {
      fontWeight: "700",
      fontSize: "2.25rem",
      color: "$white",
      marginRight: "1rem",

      "@media (min-width: 1024px)": {
        fontSize: "2.5rem",
      },
    },

    ".desc": {
      fontWeight: "500",
      fontSize: "1.12rem",
      color: "$darkGray",

      "@media (min-width: 1024px)": {
        fontSize: "1.25rem",
      },
    },
  },

  "@media (min-width: 600px)": {
    width: "80%",
  },

  "@media (min-width: 1024px)": {
    flexDirection: "row",
    height: "200px",
  },
});

export const Info = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",

  margin: "4rem auto",

  gap: "4rem",

  span: {
    fontFamily: "Montserrat",
    fontSize: "1.06rem",
    textAlign: "center",
    lineHeight: "1.75rem",
  },

  ".separator": {
    borderRadius: "4px",
    height: "2px",
    width: "15%",
    background: "$yellow",

    margin: "0 auto",
  },

  "@media (min-width: 600px)": {
    width: "80%",
  },

  "@media (min-width: 1024px)": {
    flexDirection: "row",
  },
});

export const Mission = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",

  margin: "0 auto",
  marginBottom: "4rem",

  ".content": {
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "1rem",

    gap: "2rem",

    span: {
      fontWeight: "700",
      fontSize: "2rem",
    },

    p: {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: "1rem",
      lineHeight: "1.75rem",

      "@media (min-width: 1024px)": {
        fontSize: "1.06rem",
      },
    },

    ".separator": {
      borderRadius: "4px",
      height: "2px",
      width: "40%",
      background: "$yellow",
    },

    "@media (min-width: 1024px)": {
      width: "70%",
      padding: "1.5rem",
    },
  },

  ".image": {
    display: "flex",
    width: "100%",
    padding: "1rem",

    img: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "12px",
    },

    "@media (min-width: 1024px)": {
      width: "30%",
      marginRight: "auto",
    },
  },

  "@media (min-width: 600px)": {
    width: "80%",
  },

  "@media (min-width: 1024px)": {
    flexDirection: "row",
  },
});
