import { fontWeight } from "@mui/system";

const SurveyStep = (theme = 'light') => ({
  
})

const Stepper = (theme = 'light') => ({
  container: {
    padding: "20px",
    height: '600px',
  },
  card: {
    height: '100%',
    borderRadius: '5px',
    p: 2
  },
  title: {
    fontWeight: '700',
    fontSize: '1rem',
    mb: 1
  },
  subtitle: {
    mt: '1rem',
    mb: '1rem'
  },
  stepTitle: {
    fontWeight: '700',
  }
})

const FormPanel = (theme = 'light') => ({
  title: {
    mt: 3,
    fontWeight: '700',
    fontSize: '1rem'
  },
  subtitle: {
    mt: 1
  }
})

const DishSelection = (theme = 'ligh') => ({
  container: {
    padding: "20px",
  },
  title: {
    fontWeight: "700"
  }
})

const DateTable = (theme = 'light') => ({
  container: {
    padding: "20px",
  },
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
  dataTable: DateTable(theme),
  dishSelection: DishSelection(theme),
  formPanel: FormPanel(theme),
  stepper: Stepper(theme)
})

export default survey;