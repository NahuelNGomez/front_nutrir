import { createTheme } from "@mui/material/styles";

const components = {
  MuiMenu: {
    styleOverrides: {
      list: {
        paddingTop: "0px",
        paddingBottom: "0px",
      },
    },
  },
};

let lightTheme = createTheme({
  palette: {
    primary: {
      main: "#003892",
    },
    warning: {
      main: "#FDECEA",
    },
  },
  components: {
    ...components,
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 58%), 0px 1px 3px 0px rgb(0 0 0 / 4%)"
        },
      },
    },
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: lightTheme.palette.primary.main,
        },
      },
    },
    ...components,
  },
});

export { lightTheme, darkTheme };
