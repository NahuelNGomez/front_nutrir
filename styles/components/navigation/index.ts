import { lightTheme } from "../../../src/template/theme";

export const styles = {
  unauthorizedAppBar: {
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  menuButton: {
    display: {
      sm: "inline",
      xs: "inline",
      md: "inline",
      xl: "none",
      xxl: "none",
    },
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
    color: "white",
  },
  toolBarComponents: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    marginRight: "8px",
  },
};

export const drawerStyles = (open: boolean, theme: string) => ({
  drawerDesktop: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      backgroundColor: theme == "light" ? lightTheme.palette.primary.main : "",
    },
    display: {
      sm: "none",
      xs: "none",
      md: "inline",
      xl: "inline",
      xxl: "inline",
    },
  },
  drawerMobile: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "69%",
      backgroundColor: theme == "light" ? lightTheme.palette.primary.main : "",
    },
    display: {
      sm: "inline",
      xs: "inline",
      md: "none",
      xl: "none",
      xxl: "none",
    },
  },
  DrawerHeader: {
    display: "flex",
    justifyContent: open ? "space-between" : "center",
    alignItems: "flex-start",
    padding: "10px",
    paddingTop: "20px",
  },
  drawerHeaderIcons: {
    logoIcon: {
      cursor: "pointer",
    },
    menuIcon: {
      color: "white",
    },
  },
  ListItem: {
    parent: {
      padding: open ? "" : "6px",
      paddingLeft: open ? "10px" : "",
      paddingRight: open ? "10px" : "",
    },
    children_parent: { ml: 1, height: 40 },
    children_item: {
      paddingTop: "3px",
      paddingBottom: "3px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    children_icon: { height: "0.9rem", color: "white" },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    icons: {
      color: "white",
      fontSize: "22px",
    },
    text: { color: "white", marginLeft: "10px" },
    text_separator: {
      textAlign: "left",
      paddingLeft: "12px",
      marginTop: "15px",
      marginBottom: "5px",
      color: "white",
      fontWeight: "bold",
      fontSize: "16px",
    },
    ListItemContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: "30px",
    },
  },
  exitContainer: {
    width: "100%",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
  },
  exitButton: {
    width: "100%",
    borderRadius: "3px",
    color: "#367c7b",
    backgroundColor: "#7cf6a3",
    borderColor: "#7cf6a3",
    fontWeight: "400",
    textTransform: "none",
    padding: "8px",
    fontSize: "15px",
  },
});
