import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppCtx } from "../src/contexts/store";
import { FC, ReactNode } from "react";

type props = {
    children:ReactNode
}

const Layout:FC<props> = ({ children }) => {
  const {currentTheme} = useAppCtx();
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <main>{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
