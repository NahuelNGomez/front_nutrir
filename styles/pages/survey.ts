

const DateTable = (theme = 'light') => ({
  utils: {
    completeButton: {
      width: { xs: "100%" },
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      border: '1px solid #40a39b',
      color: "#ffffff",
    },
    uncompleteButton: {
      width: { xs: "100%" },
      borderRadius: "18px",
      textTransform: "none",
      padding: "10px",
      fontSize: "14px",
      backgroundColor: 'transparent',
      border: '1px solid #40a39b',
      color: theme == "light" ? '#121212' : 'white'
    }
  }
})


const survey = (theme = 'light') => ({
  container: { padding: "20px" },
  title: { paddingBottom: "10px", paddingTop: "20px", fontSize: "22px", fontWeight: "700" },
  dataTable: DateTable(theme)
})

export default survey;