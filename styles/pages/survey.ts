import { fontWeight } from "@mui/system";

const SurveyStep = (theme = 'light') => ({

})

const Stepper = (theme = 'light') => ({
  container: {
    padding: "20px",
    minHeight: '600px',
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
  },
  buttons: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    backgroundColor: 'transparent',
    border: '1px solid #40a39b',
    color: "#40a39b",
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
    p: { xs: 0, sm: 0, md: 2, lg: 2, xl: 2 },
    mt: { xs: 2, sm: 2 }
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

const GuestsStep = (theme = 'light') => ({
  button: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px 0",
    fontSize: "14px",
    backgroundColor: 'transparent',
    border: '1px solid #40a39b',
    color: "#40a39b",
    mt: 4,
    ":disabled": {
      backgroundColor: theme === 'light' ? '#ededed' : 'transparent',
      border: theme === 'light' ? 'none' : '1px solid #9d9ba2',
    }
  }
})

const DrinkStep = (theme = 'light') => ({
  button: {
    width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
    borderRadius: "18px",
    textTransform: "none",
    padding: "10px",
    fontSize: "14px",
    backgroundColor: 'transparent',
    border: '1px solid #40a39b',
    color: "#40a39b",
    mt: 4
  }
})

const IngredientsPanel = (theme = 'light') => ({
  compoundCard: {
    container: {
      p: '0.5rem 1rem',
      display: 'flex',
      flexDirection: 'row',
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem'
    },
    imageContainer: {
      display: 'relatve',
      width: '35px',
      height: '35px'
    }
  },
  simpleCard: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      p: 1.5,
      borderRadius: '5px',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title:{
      paddingLeft: 1.5
    }
  }
})

const survey = (theme = 'light') => ({
  container: { padding: "20px" },
  title: { paddingBottom: "10px", paddingTop: "20px", fontSize: "22px", fontWeight: "700" },
  dataTable: DateTable(theme),
  dishSelection: DishSelection(theme),
  formPanel: FormPanel(theme),
  stepper: Stepper(theme),
  guests: GuestsStep(theme),
  drinks: DrinkStep(theme),
  ingredientsPanel: IngredientsPanel(theme)
})

export default survey;