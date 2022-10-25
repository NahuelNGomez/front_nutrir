import * as React from "react";
import Box from "@mui/material/Box";
import Bar from "../navigation/Bar";
import { DrawerHeader } from "@styles/components/navigation/utils";

type props = {
  children: React.ReactNode;
};

const LoggedLayout: React.FC<props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Bar />
      <Box component="main">
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default LoggedLayout;