import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./DrawerMenu";
import { styles } from "../../styles/components/navigation";
import Notification from "../ui/special/notification";
import { useAppCtx } from "../../src/contexts/store";
import SwitchMode from "../ui/special/switchMode";

const Header = () => {
  const {user} = useAppCtx();
  const [stateDrawer, setStateDrawer] = useState(false);
  const handleCloseDrawer = () => {
    setStateDrawer(false);
  };

  return (
    <React.Fragment>
      {user?.logged && 
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar>
          <Grid container direction="row">
            <Grid xs={8} item  sx={{display:"flex",flexDirection:"row"}} justifyContent={"flex-start"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setStateDrawer(!stateDrawer)}
                sx={styles.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Avatar src="/logo-nutrir.png" sx={{marginTop:"3px"}} />
              <Typography sx={{marginTop:"5px"}} variant="h6" component="div">
                Nutrir App
              </Typography>
              <DrawerMenu open={stateDrawer} onClose={handleCloseDrawer} />
            </Grid>
            <Grid container xs={4} item sx={{marginTop:"10px"}} justifyContent={"flex-end"}>
              <Notification />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      }
      {!user?.logged && 
      <AppBar position="static" sx={styles.unauthorizedAppBar}>
          <Toolbar>
          <Grid container direction="row">
            <Grid xs={8} item  sx={{display:"flex",flexDirection:"row"}} justifyContent={"flex-start"}>
              <Avatar src="/logo-nutrir.png" />
              <Typography sx={{marginTop:"5px"}} variant="h6" component="div">
                Nutrir App
              </Typography>
            </Grid>
            <Grid container xs={4} item  justifyContent={"flex-end"}>
              <SwitchMode />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      
      }
    </React.Fragment>
  );
};

export default Header;
