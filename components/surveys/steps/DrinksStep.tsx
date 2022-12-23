
import FormPanel from '@components/ui/contents/FormPanel'
import { Grid } from '@mui/material'
import React, { FC, useState } from 'react'
import GuestsPanel from '../GuestsPanel/GuestsPanel'
import CustomAccordion from '../mealCompositionPanel/customAccordion/CustomAccordion'
import SurveyStepper from '../surveyStepper/SurveyStepper'


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
}

const DrinksStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
  setDateStep,
  dateStep,
  mealTypeStep,
  guestsStep,
  setGuestStep,
  drinkStep,
  setDrinkStep
}) => {

  const [displayStepper, setDisplayStepper] = useState(true)

  const { childs, kids, teens, adults } = guestsStep
  const childsN = parseInt(childs)
  const kidsN = parseInt(kids)
  const teensN = parseInt(teens)
  const adultsN = parseInt(adults)
  const add = childsN + kidsN + teensN + adultsN



  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      justifyContent={"space-around"}
    >
      <Grid
        item
        xs={8}
      >
        <FormPanel
          title="2. ¿Cuántos comenzales tienes?"
          subtitle="Indica según el rango etáreo la cantidad de comenzales que tienes."
          backClickHandler={handleGoToPreviousStep}
          fowardClickHandler={handleGoToNextStep}
        >
          <CustomAccordion meals={defaultMeals} drinkStep={drinkStep} setDrinkStep={setDrinkStep} />
        </FormPanel>
      </Grid>

      <Grid
        item
        xs={4}
      >
        <SurveyStepper
          dateStep={dateStep}
          displayStepper={displayStepper}
          mealTypeStep={mealTypeStep}
          guestsStep={add}
          stepActive={1}
        />
      </Grid>

    </Grid>
  )
}

export default DrinksStep