const UserMenu = (theme = "light") => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: {
      xs: "center",
      sm: "center",
      lg: "space-around",
      xl: "space-around",
    },
    cursor: "pointer",
    alignItems: "center",
  },
  avatar: { width: 36, height: 36, backgroundColor: "grey" },
  text_content: {
    pl: 1,
    display: {
      sm: "none",
      xs: "none",
      md: "block",
      xl: "block",
      xxl: "block",
    },
  },
  text: { fontSize: "16px", fontWeight: "500", marginBottom: "-2px" },
  menu: {
    mt: "10px",
    mr: "7px",
    padding: "10px",
    boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
    borderRadius: "10px",
  },
  menu_list: { padding: "10px" },
  menu_text: { sx: { fontSize: "13px" } },
});

const content = (theme = "light") => ({
  userMenuStyles: UserMenu(theme),
});

export default content;
