import { styles } from "@styles/components/navigation";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import { useAppCtx } from "../../src/contexts/store";
import Image from "next/image";
import SwitchMode from "@components/ui/special/switchMode";
import { CustomAppBar } from "@styles/components/navigation/utils";
import DrawerMenu from "./DrawerMenu";
import MenuIcon from "@mui/icons-material/Menu";

const UnauthorizedAppBar = () => (
  <Toolbar>
    <Grid container direction="row">
      <Grid
        xs={8}
        item
        sx={styles.toolBarComponents}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <Image src={"/dark-logo.png"} width={80} height={50} />
      </Grid>
      <Grid container xs={4} item justifyContent={"flex-end"}>
        <SwitchMode />
      </Grid>
    </Grid>
  </Toolbar>
);

const AuthorizedAppBar = ({
  open,
  changeOpen,
}: {
  open: boolean;
  changeOpen(): void;
}) => (
  <Toolbar>
    <Grid container direction="row">
      <Grid
        xs={8}
        item
        sx={styles.toolBarComponents}
        alignItems={"center"}
        justifyContent={"flex-start"}
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
      <Grid
        container
        xs={4}
        item
        justifyContent={"flex-end"}
        alignContent="center"
      ></Grid>
    </Grid>
  </Toolbar>
);

export default function AppBarLayout() {
  const { user, menuOpen, setMenuOpen } = useAppCtx();

  return (
    <>
      {user?.logged && (
        <>
          <Grid sx={{ display: { sm: "none", xs: "none", md: "inline",xl:"inline",xxl:"inline" } }}>
            <CustomAppBar position="fixed" open={menuOpen}>
              <AuthorizedAppBar
                open={menuOpen}
                changeOpen={() => setMenuOpen(!menuOpen)}
              />
            </CustomAppBar>
          </Grid>
          <Grid sx={{ display: { sm: "inline", xs: "inline", md: "none",xl:"none",xxl:"none" } }}>
          <AppBar position="fixed" sx={styles.appBar}>
            <AuthorizedAppBar
              open={menuOpen}
              changeOpen={() => setMenuOpen(!menuOpen)}
            />
          </AppBar>
          </Grid>
          <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(!menuOpen)} />
        </>
      )}
      {!user?.logged && (
        <AppBar position="static" sx={styles.unauthorizedAppBar}>
          <UnauthorizedAppBar />
        </AppBar>
      )}
    </>
  );
}
