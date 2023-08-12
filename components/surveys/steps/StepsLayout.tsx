import FormPanel from '@components/ui/contents/FormPanel'
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import servicesStepsProvider from './utils/servicesStepsProvider'
import { useState } from "react";
import SurveyStepper from '../surveyStepper/SurveyStepper';
import { useAppCtx } from '../../../src/contexts/store';
import useWindowDimensions from '../../../src/hooks/useWindowDimensions';
import { breakpoints } from '../../../src/constants/breakpoints';


const StepsLayout = () => {

  const { selectedSurvey, displaySideStepper } = useAppCtx();
  const [width, setWidth] = useState(0);
  const [activeStep, setActiveStep] = useState(0)
  const dimensions = useWindowDimensions();

  useEffect(() => {
    setWidth(dimensions.width);
  }, []);

  const selectedService = selectedSurvey?.service ? selectedSurvey?.service : ''

  const steps = servicesStepsProvider(selectedService)
  const ActiveStepComponent = steps[activeStep].content


  const handleGoToNextStep = () => {
    setActiveStep(Math.min(activeStep + 1, Object.values(steps).length - 1))
  }
  const handleGoToPreviousStep = () => {
    setActiveStep(Math.max(activeStep - 1, 0))
  }

  const mobileLayout = () => {
    return (
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flexDirection={'column'}
      >
        <Grid
          item
        >
          <SurveyStepper
            backClickHandler={handleGoToPreviousStep}
            mobile
          />
        </Grid>

        {
          displaySideStepper
            ? <>
              <Grid
                item
              >
                <FormPanel
                  title={`${steps[activeStep].title}`}
                  subtitle={`${steps[activeStep].subtitle}`}
                >
                  <ActiveStepComponent
                    handleGoToNextStep={handleGoToNextStep}
                    handleGoToPreviousStep={handleGoToPreviousStep}
                  />
                </FormPanel>
              </Grid>
            </>
            : null
        }


      </Grid>
    )
  }

  const desktopLayour = () => {
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
                >
                  <ActiveStepComponent
                    handleGoToNextStep={handleGoToNextStep}
                    handleGoToPreviousStep={handleGoToPreviousStep}
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
            mobile={false}
          />
        </Grid>
      </Grid>
    )
  }

  return (
     width !== 0 && width >= breakpoints.xs && width < breakpoints.m
      ? mobileLayout()
      : desktopLayour()
  )
}

export default StepsLayout