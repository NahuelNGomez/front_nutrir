import FormPanel from '@components/ui/contents/FormPanel'
import { Button, Grid } from '@mui/material'
import React, { FC, useState } from 'react'
import GuestsPanel from './GuestsStep'
import CustomAccordion from './IngredientsSteps'
import SurveyStepper from '../surveyStepper/SurveyStepper'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'


const defaultMeals = [
  {
    compound: true,
    name: 'Pastel de papa',
    composition: [
      {
        ingredienteName: 'Pan',
        picture: '/images/ui/mock/bread.jpg'
      },
      {
        ingredienteName: 'Queso Crema',
        picture: '/images/ui/mock/cheese.jpg'
      },
      {
        ingredienteName: 'Mermelada',
        picture: '/images/ui/mock/jam.jpg'
      },
    ]
  },
  {
    compound: false,
    name: 'Comida-Entrada Simple Default'
  },
]


type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
  setDateStep: () => {}
  dateStep: string
  setMealTypeStep: () => {}
  mealTypeStep: string
  setGuestStep: () => {}
  guestsStep: {
    childs: string
    kids: string
    teens: string
    adults: string
  }
  drinkStep: {}
  setDrinkStep: () => {}
  setBreakFastMainMealStep: () => {}
  breakFastMainMailStep: {}
}

const EntryDishStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
  setDateStep,
  dateStep,
  mealTypeStep,
  guestsStep,
  setGuestStep,
  drinkStep,
  setDrinkStep,
  setBreakFastMainMealStep,
  breakFastMainMailStep
}) => {

  const [displayStepper, setDisplayStepper] = useState(true)

  const { childs, kids, teens, adults } = guestsStep
  const childsN = parseInt(childs)
  const kidsN = parseInt(kids)
  const teensN = parseInt(teens)
  const adultsN = parseInt(adults)
  const add = childsN + kidsN + teensN + adultsN

  const handleNextBtn = () => {
    handleGoToNextStep()
  }

  const handleBackBtn = () => {
    handleGoToPreviousStep()
  }


  return (
    <>
      <IngredientsPanel meals={defaultMeals} drinkStep={breakFastMainMailStep} setDrinkStep={setBreakFastMainMealStep} />
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
    </>

  )
}

export default EntryDishStep