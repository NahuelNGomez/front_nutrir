import { styles } from "@styles/components/navigation";
import { styles as utilsStyles } from "@styles/components/utils";
import { AppBar, Grid } from "@mui/material";
import { useAppCtx } from "../../src/contexts/store";
import { CustomAppBar } from "@styles/components/navigation/utils";
import DrawerMenu from "./DrawerMenu";
import AuthorizedToolBar from "./ToolBarAuthorized";
import UnauthorizedToolBar from "./ToolbarUnauthorized";

export default function AppBarLayout() {
  const { user, menuOpen, setMenuOpen } = useAppCtx();

  return (
    <>
      {user?.logged && (
        <>
          <Grid sx={utilsStyles.isDesktopVisible}>
            <CustomAppBar position="fixed" open={menuOpen}>
              <AuthorizedToolBar
                changeOpen={() => setMenuOpen(!menuOpen)}
                user={user}
              />
            </CustomAppBar>
          </Grid>
          <Grid sx={utilsStyles.isMobileVisible}>
            <AppBar position="fixed">
              <AuthorizedToolBar
                changeOpen={() => setMenuOpen(!menuOpen)}
                user={user}
              />
            </AppBar>
          </Grid>
          <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(!menuOpen)} />
        </>
      )}
      {!user?.logged && (
        <AppBar position="static" sx={styles.unauthorizedAppBar}>
          <UnauthorizedToolBar />
        </AppBar>
      )}
    </>
  );
}
