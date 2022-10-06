import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppCtx } from "../../src/contexts/store";
import SwitchMode from "../ui/special/switchMode";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [stateDrawer, setStateDrawer] = useState(false);
  const handleCloseDrawer = () => {
    setStateDrawer(false);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setStateDrawer(!stateDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Sistema Integral de Comedores y Merenderos
          </Typography>
          <DrawerMenu open={stateDrawer} onClose={handleCloseDrawer} />
          <SwitchMode />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
