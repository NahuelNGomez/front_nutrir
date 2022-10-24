import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarLayout from "./navigation/AppBar";
import { DrawerHeader } from "@styles/components/navigation/utils";

export default function LayoutAuth({children}:{children?:React.ReactNode}) {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarLayout />
      <Box component="main">
        <DrawerHeader />
          {children}
      </Box>
    </Box>
  );
}
