import FormPanel from '@components/ui/contents/FormPanel'
import { Grid } from '@mui/material'
import React from 'react'
import servicesType from './utils/servicesTypes'
import { FC, useState } from "react";
import SurveyStepper from '../surveyStepper/SurveyStepper';
import { useAppCtx } from '../../../src/contexts/store';
import { guestsStepsType } from '../../../src/types/global';

const StepsLayout = () => {

  const { selectedSurvey, displaySideStepper } = useAppCtx();

  const [activeStep, setActiveStep] = useState(0)

  const [dateStep, setDateStep] = useState<string>()
  const [suerveyInfo, setSurveyInfo] = useState<{ comedor: number, fecha: string, funcionamiento: string }>()
  const [mealTypeStep, setMealTypeStep] = useState<string>()
  const [guestsStep, setGuestStep] = useState<guestsStepsType>({
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0
  })
  const [drinkStep, setDrinkStep] = useState<string>()
  const [breakFastMainMailStep, setBreakFastMainMealStep] = useState<string>()

  const selectedService = selectedSurvey?.service ? selectedSurvey?.service : ''  

  const steps = servicesType(selectedService)
  const ActiveStepComponent = steps[activeStep].content


  const handleGoToNextStep = () => {
    setActiveStep(Math.min(activeStep + 1, Object.values(steps).length - 1))
  }
  const handleGoToPreviousStep = () => {
    setActiveStep(Math.max(activeStep - 1, 0))
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
    >
      {
        displaySideStepper
          ? <>
            <Grid
              item
              xs={8}
            >
              <FormPanel
                title={`${steps[activeStep].title}`}
                subtitle={`${steps[activeStep].subtitle}`}
              // backClickHandler={handleGoToPreviousStep}
              // fowardClickHandler={handleGoToNextStep}
              >
                <ActiveStepComponent
                  handleGoToNextStep={handleGoToNextStep}
                  handleGoToPreviousStep={handleGoToPreviousStep}
                  setDateStep={setDateStep}
                  dateStep={dateStep}
                  suerveyInfo={suerveyInfo}
                  setSurveyInfo={setSurveyInfo}
                  setMealTypeStep={setMealTypeStep}
                  mealTypeStep={mealTypeStep}
                  setGuestStep={setGuestStep}
                  guestsStep={guestsStep}
                  setDrinkStep={setDrinkStep}
                  drinkStep={drinkStep}
                  setBreakFastMainMealStep={setBreakFastMainMealStep}
                  breakFastMainMailStep={breakFastMainMailStep}
                />
              </FormPanel>
            </Grid>
          </>
          : null
      }
  
      <Grid
        item
        xs={4}
      >
        <SurveyStepper
          backClickHandler={handleGoToPreviousStep}
        />
      </Grid>


    </Grid>
  )
}

export default StepsLayout