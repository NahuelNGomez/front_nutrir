import colors from "@styles/colors";

export const userMenuStyles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    cursor: "pointer",
    borderLeft: "1px solid #eee",
  },
  avatar: { width: 42, height: 42,backgroundColor:"grey" },
  text_content: {
    display: {
      sm: "none",
      xs: "none",
      md: "block",
      xl: "block",
      xxl: "block",
    },
  },
  text: { fontSize: "16px", fontWeight: "500",marginBottom:"-2px" },
  menu: {
    mt: "10px",
    mr: "7px",
    padding: "10px",
    boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
    borderRadius: "10px",
  },
  menu_list: { padding: "10px" },
  menu_text: { sx: { fontSize: "13px" } },
};


export const dashboardCardsStyle = {
  actions: { justifyContent: "center", paddingBottom: "20px" },
  button: {
    width: "70%",
    borderRadius: "12px"
  },
};
