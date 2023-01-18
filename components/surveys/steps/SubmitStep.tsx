import FormPanel from '@components/ui/contents/FormPanel'
import { Grid } from '@mui/material'
import React, { FC, useState, useEffect } from 'react'
import GuestsPanel from './GuestsStep'
import CustomAccordion from './IngredientsSteps'
import SurveyStepper from '../surveyStepper/SurveyStepper'
import { useAppCtx } from '../../../src/contexts/store'


const defaultMeals = [
  {
    compound: true,
    name: 'Pan con adheresos',
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
    name: 'Torta'
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

const SubmitStep: FC<Props> = ({
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

  const { setDisplaySideStepper } = useAppCtx()
  const [displayStepper, setDisplayStepper] = useState(true)

  const { childs, kids, teens, adults } = guestsStep
  const childsN = parseInt(childs)
  const kidsN = parseInt(kids)
  const teensN = parseInt(teens)
  const adultsN = parseInt(adults)
  const add = childsN + kidsN + teensN + adultsN


  useEffect(() => {
    setDisplaySideStepper(false)
    // return () => {
    //   setDisplaySideStepper(true)
    // }
  }, [])


  return (
    <>
    </>
  )
}

export default SubmitStep