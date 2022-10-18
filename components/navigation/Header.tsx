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
import DrawerMenu from "@components/navigation/DrawerMenu";
import { styles } from "@styles/components/navigation";
import Notification from "@components/ui/special/notification";
import SwitchMode from "@components/ui/special/switchMode";
import { useAppCtx } from "../../src/contexts/store";
import { useRouter } from "next/router";

const Header = () => {
  const {user} = useAppCtx();
  const router = useRouter();
  const [stateDrawer, setStateDrawer] = useState(false);
  const handleCloseDrawer = () => {
    setStateDrawer(false);
  };

  return (
    <React.Fragment>
      {user?.logged && 
      <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar>
          <Grid container direction="row">
            <Grid xs={8} item  sx={styles.toolBarComponents} alignItems={"center"} justifyContent={"flex-start"}>
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
              <Avatar sx={styles.logo} src="/logo-nutrir.png" onClick={()=> router.push("/")} />
              <Typography  variant="h6" component="div">
                Nutrir App
              </Typography>
              <DrawerMenu open={stateDrawer} onClose={handleCloseDrawer} />
            </Grid>
            <Grid container xs={4} item justifyContent={"flex-end"} alignContent="center">
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
            <Grid xs={8} item  sx={styles.toolBarComponents} alignItems={"center"} justifyContent={"flex-start"}>
              <Avatar  sx={styles.logo} src="/logo-nutrir.png" />
              <Typography  variant="h6" component="div">
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
