import { createTheme } from "@mui/material/styles";
import colors from "@styles/colors";
import components from "@styles/theme_components";


let lightTheme = createTheme({
  palette: {
    primary: {
      main: colors("light").primary,
    },
    warning: {
      main: "#FDECEA",
    },
  },
  components: {
    ...components('light'),
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    ...components('dark')
  },
});

export { lightTheme, darkTheme };
