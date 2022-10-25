import {  Grid, IconButton, Toolbar } from "@mui/material";
import { styles } from "@styles/components/navigation";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "@components/ui/special/UserMenu";

type props = {
  changeOpen(): void;
};

const AuthorizedToolBar: FC<props> = ({ changeOpen }) => (
  <Toolbar>
    <Grid container direction="row">
      <Grid
        xs={10}
        item
        sx={styles.toolBarComponents}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <Grid
          sx={{
            display: {
              sm: "inline",
              xs: "inline",
              md: "none",
              xl: "none",
              xxl: "none",
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={changeOpen}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        xs={2}
        item
        justifyContent={"flex-end"}
        alignContent="center"
      >
        <UserMenu />
      </Grid>
    </Grid>
  </Toolbar>
);

export default AuthorizedToolBar;
