import { styled } from "..";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100%",

  padding: "2rem 1rem",

  background: "$black",
  color: "$white",

  gap: "2rem",

  ".column-1": {
    userSelect: "none",

    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    ".header": {
      display: "flex",
      flexDirection: "column",
      width: "100%",

      ".title": {
        fontWeight: "bold",
        fontSize: "1.5rem",
      },

      ".subtitle": {
        fontWeight: "normal",
        marginTop: "1rem",
        textAlign: "justify",
        color: "$darkGray",
      },
    },

    ".social": {
      display: "flex",
      gap: "1rem",
      fontSize: "1.5rem",
      lineHeight: "2rem",

      svg: {
        cursor: "pointer",
        transition: "all 0.2s",

        "&:hover": {
          color: "$yellow",
        },
      },
    },

    "@media (min-width: 600px)": {
      width: "50%",
    },

    "@media (min-width: 1024px)": {
      width: "30%",
    },
  },

  ".column-2": {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    ".services": {
      display: "flex",
      flexDirection: "column",

      whiteSpace: "nowrap",

      ".servicesTitle": {
        userSelect: "none",

        fontWeight: "bold",
        fontSize: "1.25rem",
        marginBottom: "0.5rem",
        color: "$white",
      },

      a: {
        userSelect: "none",

        color: "$darkGray",
        marginTop: "1rem",

        transition: "all 0.2s",

        "&:hover": {
          color: "$yellow",
        },
      },

      "@media (min-width: 764px)": {
        width: "50%",
      },
    },

    ".contact": {
      display: "flex",
      flexDirection: "column",

      ".contactTitle": {
        userSelect: "none",

        fontWeight: "bold",
        fontSize: "1.25rem",
        marginBottom: "0.5rem",
        color: "$white",
      },

      p: {
        color: "$darkGray",
        marginTop: "1rem",
        whiteSpace: "nowrap",

        transition: "all 0.2s",

        "&:hover": {
          color: "$yellow",
        },

        cursor: "pointer",
      },

      "@media (min-width: 764px)": {
        width: "50%",
      },
    },

    "@media (min-width: 1024px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  "@media (min-width: 600px)": {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  "@media (min-width: 1024px)": {
    justifyContent: "space-around",
  },
});
