
import FormPanel from '@components/ui/contents/FormPanel'
import SurveysAvailable from '@components/ui/contents/SurveysAvailable'
import { Grid } from '@mui/material'
import { pagesStyles } from '@styles/index'
import React, { FC } from 'react'
import { dishesList } from '../../../src/contents/dishesList'
import { useAppCtx } from '../../../src/contexts/store'
import SurveyStepper from '../surveyStepper/SurveyStepper'

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
  dateStep: string
  setMealTypeStep: () => {}

}


const DishSelectionStep: FC<Props> = ({ handleGoToNextStep, handleGoToPreviousStep, dateStep, setMealTypeStep }) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  const backClickHandler = (e: any) => {
    e.preventDefault()
    // router.push('/surveys')
  }

  const fowardClickHandler = (e: any) => {
    e.preventDefault()
    // if (surveyInfo.dishes) {
    // router.push('/surveys/meal-survey/guests-step')
    // }
  }

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      justifyContent={"space-around"}
      sx={surveyStyles.container}
    >
      <Grid
        item
        xs={8}
      >
        <FormPanel
          title="1. ¿Qué comida vas a cargar?"
          subtitle="Elige qué tipo de servicio vas a completar en las encuestas."
          backClickHandler={handleGoToPreviousStep}
          fowardClickHandler={handleGoToNextStep}
        >
          <SurveysAvailable surveys={dishesList} setMealTypeStep={setMealTypeStep} />
        </FormPanel>
      </Grid>

      <Grid
        item
        xs={4}
      >
        <SurveyStepper
          dateStep={dateStep}
        />
      </Grid>

    </Grid>
  )
}

export default DishSelectionStep