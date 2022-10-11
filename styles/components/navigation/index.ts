import { lightTheme } from "../../../src/template/theme";

export const styles = {
  appBar: {
    width: { sm: `calc(100% - 240px)` },
    ml: { sm: `240px` },
  },
  menuButton: {
    display: { lg: "none", xl: "none", xxl: "none" },
  },
  drawerMobile: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: "70%" },
  },
  drawerPermanent: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
  },
  profileItem: {
    backgroundColor: lightTheme.palette.primary.main,
    marginTop: "-10px",
    padding: "15px",
  },
  avatarName: {
    width: 60,
    height: 60,
    color: "white",
  },
  avatarReggard: {
      color:"white"
  },
};
