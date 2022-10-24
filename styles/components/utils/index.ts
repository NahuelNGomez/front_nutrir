export const styles = {
  poll: {
    container: {
      width: "100%",
      marginTop: "20px",
    },
    content: { flex: "1 0 auto", width: "100%" },
    skeleton: { width: "100%", height: 214, padding: "15px" },
  },
  fullWidth: {
    with: "100%",
  },
  isMobileVisible:{
    display: {
      sm: "block",
      xs: "block",
      md: "block",
      xl: "none",
      xxl: "none",
    },
  },
  isDesktopVisible:{
    display: {
      sm: "none",
      xs: "none",
      md: "none",
      xl: "block",
      xxl: "block",
    },
  }
};
