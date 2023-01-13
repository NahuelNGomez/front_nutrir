import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardContent, Checkbox, Grid } from '@mui/material';

import MealIngredientCard from '../mealCompositionPanel/customAccordion/MealIngredientCard';



const defaultMeals = [
  {
    compound: true,
    name: 'Leche chocolatada',
    composition: [
      {
        ingredienteName: 'Leche',
        picture: '/images/ui/mock/milk.jpg'
      },
      {
        ingredienteName: 'Cacao',
        picture: '/images/ui/mock/cacao.jpg'
      },
      {
        ingredienteName: 'Azucar',
        picture: '/images/ui/mock/sugar.jpg'
      },
    ]
  },
  {
    compound: true,
    name: 'Leche chocolatada',
    composition: [
      {
        ingredienteName: 'Leche',
        picture: '/images/ui/mock/milk.jpg'
      },
      {
        ingredienteName: 'Cacao',
        picture: '/images/ui/mock/cacao.jpg'
      },
      {
        ingredienteName: 'Azucar',
        picture: '/images/ui/mock/sugar.jpg'
      },
    ]
  },
  {
    compound: false,
    name: 'Yogurt'
  },
]

type compositionType = {
  ingredienteName: string,
  picture: string
}
type mealsType = {
  compound: boolean;
  name: string;
  composition?: Array<compositionType>
}

type Props = {
  meals: Array<mealsType>
  setDrinkStep: any
  drinkStep: any
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const IngredientsSteps: React.FC<Props> = ({
  meals = defaultMeals,
  setDrinkStep,
  drinkStep,
  handleGoToNextStep,
  handleGoToPreviousStep
}) => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const ingredientHandleChange = (e: any) => {
    if (e.target.checked === true) {
      setDrinkStep({
        ...drinkStep,
        [e.target.name]: e.target.checked
      })
    } else {
      delete drinkStep[e.target.name]
    }
  }

  const handleNextBtn = () => {
    handleGoToNextStep()
  }

  const handleBackBtn = () => {
    handleGoToPreviousStep()
  }

  return (
    <div style={{ gap: '1rem' }}>
      {
        meals.map((e, index) => {
          return (
            e.compound
              ? (
                <div key={`key+${e.name}`} style={{ marginBottom: '0.5rem' }}>
                  <Accordion sx={{ pt: 1, pb: 1 }} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {e.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container xs={12} justifyContent={'space-between'}>
                        {
                          e.composition
                            ? e.composition.map(({ ingredienteName, picture }) => {
                              return (
                                <MealIngredientCard
                                  setDrinkStep={setDrinkStep}
                                  drinkStep={drinkStep}
                                  ingredienteName={ingredienteName}
                                  picture={picture}
                                  key={`${ingredienteName}_key`}
                                // ingredientHandleChange={ingredientHandleChange}
                                />
                              )
                            })
                            : null
                        }
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>)
              : (
                <div>
                  <Grid
                    item xs={12}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 1.5,
                        borderRadius: '5px',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <Typography sx={{ paddingLeft: 1.5 }}>
                        {e.name}
                      </Typography>
                      <Checkbox
                        name={e.name}
                        onClick={(e) => ingredientHandleChange(e)}
                      />
                    </Card>
                  </Grid>
                </div>
              )
          )
        })
      }

      <Grid
        container xs={12}
        justifyContent={"space-between"}
        sx={{ pt: 0 }}
      >
        <Button
          onClick={handleBackBtn}
          sx={{
            width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
            borderRadius: "18px",
            textTransform: "none",
            padding: "10px",
            fontSize: "14px",
            backgroundColor: 'transparent',
            border: '1px solid #40a39b',
            color: "#40a39b",
            mt: 4
          }}
        >
          Volver
        </Button>
        <Button
          onClick={handleNextBtn}
          sx={{
            width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
            borderRadius: "18px",
            textTransform: "none",
            padding: "10px 0",
            fontSize: "14px",
            backgroundColor: 'transparent',
            border: '1px solid #40a39b',
            color: "#40a39b",
            mt: 4
          }}
        >
          Siguiente
        </Button>
      </Grid>
    </div>
  );
}

export default IngredientsSteps