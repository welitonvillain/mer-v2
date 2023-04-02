import { styled } from "..";

export const ServiceContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",

  ".container": {
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    width: "100%",
    height: "100%",

    "@media (min-width: 1024px)": {
      flexDirection: "row",
      gap: "1rem",
    },
  },

  "@media (min-width: 600px)": {
    width: "80%",
    margin: "0 auto",
  },

  "@media (min-width: 1024px)": {
    width: "90%",
    flexDirection: "row",
    padding: "0 0.5rem",
    height: "560px",
  },

  "@media (min-width: 1160px)": {
    width: "80%",
  },

  "@media (min-width: 1500px)": {
    width: "80%",
    padding: "0 0.5rem",
    height: "460px",
  },
});

export const Service = styled("div", {
  cursor: "pointer",
  display: "flex",
  width: "100%",
  height: "200px",
  background: "$black",
  borderRadius: "12px",

  position: "relative",

  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },

  ".cardContent": {
    display: "flex",
    width: "100%",
    height: "100%",
    padding: "1rem",
    alignItems: "center",
    borderRadius: "12px",

    background:
      "linear-gradient(180deg, rgba(0,0,0,0.65172006302521) 7%, rgba(0,0,0,0.40242034313725494) 50%, rgba(0,0,0,0.65) 93%)",

    zIndex: "10",

    span: {
      color: "$white",
      fontSize: "1.5rem",
      fontWeight: "bold",

      "@media (min-width: 1024px)": {
        display: "none",
      },
    },

    ".view": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: "1rem",

      color: "$white",

      ".arrow": {
        fontSize: "1.25rem",
        color: "$yellow",
      },

      span: {
        fontSize: "0.85rem",
        fontWeight: "normal",

        "&:hover": {
          color: "$yellow",
        },
      },

      cursor: "pointer",
      transition: "all 0.2s",

      "@media (min-width: 800px)": {
        ".arrow": {
          fontSize: "1.5rem",
        },

        span: {
          fontSize: "1rem",
        },
      },

      "@media (min-width: 1024px)": {
        display: "none",
      },
    },
  },

  "@media (min-width: 600px)": {
    height: "300px",
  },

  "@media (min-width: 1024px)": {
    height: "100%",
    minWidth: "320px",
    maxWidth: "320px",
  },
});

export const ServiceContent = styled("div", {
  display: "none",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "2rem 1.5rem",
  marginTop: "1rem",
  textAlign: "justify",
  borderRadius: "12px",
  backgroundColor: "$gray",
  transition: "all 0.2s",

  height: "100%",

  variants: {
    opened: {
      true: {
        display: "flex",
      },
    },
  },

  ".containerTitle": {
    display: "none",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",

    "@media (min-width: 1024px)": {
      display: "block",
      fontSize: "1.85rem",
    },

    "@media (min-width: 1320px)": {
      display: "block",
      fontSize: "2rem",
    },
  },

  ".content": {
    margin: "auto 0",

    "@media (min-width: 1024px)": {
      fontSize: "0.9rem",
    },

    "@media (min-width: 1320px)": {
      fontSize: "1rem",
    },
  },

  ".quote": {
    display: "flex",
    width: "100%",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    gap: "0.5rem",
    margin: "1.5rem 0 1rem 0",

    "&:hover": {
      color: "$yellow",
    },
  },

  "@media (min-width: 1024px)": {
    display: "flex",
    marginTop: "0rem",
    justifyContent: "center",
  },
});
