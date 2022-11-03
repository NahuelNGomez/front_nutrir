import colors from "@styles/colors";

const EmailCart = (theme = "light") => ({
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
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
  },
});

const CodeCart = (theme = "light") => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    linkText: {
      color: colors(theme).primary,
      fontWeight: "500",
      fontSize: "13px",
      textTransform: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      textAlign: "left",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    secondsTimer: {
      padding: 10,
    },
  },
});

const PasswordCart = (theme = "light") => ({
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
  },
  utils: {
    container: {
      width: "98%",
    },
    textInput: {
      marginTop: "15px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
  },
});

const recoveryAccount = (theme = "light") => ({
  container: { padding: "10px" },
  emailCartStyles: EmailCart(theme),
  codeCartStyles: CodeCart(theme),
  passwordCartStyles: PasswordCart(theme),
});

export default recoveryAccount;
