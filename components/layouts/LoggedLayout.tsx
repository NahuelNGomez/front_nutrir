import * as React from "react";
import Box from "@mui/material/Box";
import Bar from "../navigation/Bar";
import { DrawerHeader } from "@styles/components/navigation/utils";
import { useAppCtx } from "../../src/contexts/store";

type props = {
  children: React.ReactNode;
};

const LoggedLayout: React.FC<props> = ({ children }) => {
  const {modeTheme} = useAppCtx();
  return (
    <Box sx={{ display: "flex" }}>
      <Bar />
      <Box component="main" style={{backgroundColor:modeTheme !== 'dark' ? '#f7f8f': '',minHeight:"100vh"}}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default LoggedLayout;