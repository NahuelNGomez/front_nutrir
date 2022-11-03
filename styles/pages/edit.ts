const edit = (theme = "light") => ({
  container: { padding: "20px" },
  title: { paddingBottom: "15px" },
  daysContainerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  utils: {
    daysButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "auto",
      pl: 4,
      pr: 4,
      color: "white",
    },
    textInput: {
      marginTop: "15px",
    },
    submitButton: {
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      width: "40%",
      margin: "15px",
    },
    circularProgress: {
      marginLeft: "5px",
    },
    errorMessage: {
      padding: "15px",
    },
    AlertMessage: { justifyContent: "center" },
  },
  form: {
    title: {
      textAlign: "center",
      fontWeight: "400",
    },
    fields: {
      padding: "5px",
    },
  },
});

export default edit;
