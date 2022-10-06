import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppCtx } from "../src/contexts/store";
import { FC, ReactNode } from "react";

type props = {
    children:ReactNode
}

const Layout:FC<props> = ({ children }) => {
  const useStore = useAppCtx();
  return (
    <ThemeProvider theme={useStore.currentTheme}>
      <CssBaseline />
      <main>{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
