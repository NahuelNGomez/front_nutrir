import colors from "./colors";

const components = (theme: string) => ({
  MuiMenu: {
    styleOverrides: {
      list: {
        paddingTop: "0px",
        paddingBottom: "0px",
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        ":after": {
          borderBottom: `2px solid ${colors(theme).primary}`,
        },
        "&.Mui-focused": {
            backgroundColor: colors(theme).light_secondary,
          },

      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow:
          "0px 1px 7px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: colors(theme).text_input,
        height:"50px"
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme ==="dark"? "transparent" : colors(theme).primary  ,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: colors(theme).primary,
        color: "#121212",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: colors(theme).primary,
        },
        fontSize:"13px"
      },
    },
  },
});

export default components;