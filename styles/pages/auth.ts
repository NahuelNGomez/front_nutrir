import { CSSProperties } from "react";
import { lightTheme } from "../../src/template/theme";

type login_styles = {
  page: CSSProperties;
  content: {
    container: CSSProperties;
    header: CSSProperties;
    cardContent: CSSProperties;
    actions: {
      container: CSSProperties;
      helperText: CSSProperties;
      floatingText: CSSProperties;
    };
  };
  utils: {
    container: CSSProperties;
    textInput: CSSProperties;
    linkText: CSSProperties;
    submitButton: CSSProperties;
    circularProgress: CSSProperties;
    errorMessage: CSSProperties;
    codeContainer:CSSProperties;
    secondsTimer:CSSProperties
  };
  register:{
    title:CSSProperties,
    fields:CSSProperties
  }
};

export const styles = (theme: string): login_styles => ({
  page: {
    backgroundColor: theme == "light" ? "#013A6B" : "#121212",
    backgroundImage:
      theme == "light"
        ? "-webkit-linear-gradient(25deg, #ffffff 50%, #f1f3fa 50%)"
        : "-webkit-linear-gradient(25deg, #121212 50%, rgba(255, 255, 255, 0.09) 50%)",
      minHeight:"100vh"
  },
  content: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight:"100vh"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      width: "100%",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    actions: {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      helperText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "10px",
      },
      floatingText: {
        fontSize: "13px",
      },
    },
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    linkText: {
      textAlign: "right",
      color: lightTheme.palette.primary.main,
      fontWeight: "500",
      fontSize: "13px",
      textTransform: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
    submitButton: {
      width: "100%",
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    codeContainer:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    secondsTimer:{
      padding: 10,
    }
  },
  register:{
    title: {
      textAlign: "center",
      fontWeight: "400",
    },
    fields: {
      padding: "5px",
    },
  }
});