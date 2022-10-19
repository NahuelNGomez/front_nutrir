import { lightTheme } from "../../src/template/theme";

export const styles = {
  container: { height: "auto",marginTop:"25px" },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  icon: { width: 155, height: 155 },
  semiFullWidth: { width: "98%" },
  actions: {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    second_container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop:"10px"
    },
    code_container : {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
    }
  },
  circularProgress: { marginLeft: "5px" },
  error_message: { padding: "15px" },
  title_text : {
    fontWeight:"bold"
  },
  input_text : {
    marginTop:"15px"
  },
  submit_button : {
    width:"100%",
    borderRadius:"18px",
    textTransform:"none",
    padding:"10px",
    fontSize:"14px"
  },
  link_text : {
    textAlign:"right",
    color:lightTheme.palette.primary.main,
    fontWeight:"500",
    fontSize:"13px",
    textTransform:"none",
    backgroundColor:"transparent",
    cursor:"pointer"
  },
  floating_text : {
    fontSize:"13px"
  },
  seconds_timer:{
    padding:10,
  },
  register:{
    title:{
      textAlign:"center",
      fontWeight:"400"
    },
    fields:{
      padding:"5px"
    }
  }
};
