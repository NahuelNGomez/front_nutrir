import { Card, CardContent, Grid, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FC, useEffect, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import moment from "moment";
import { pagesStyles } from "@styles/index";
import stepsFormatter from "./utils/stepsFormatter";

type Props = {
  displayStepper?: boolean
  stepActive?: number
  dateStep?: string
  mealTypeStep?: string
  guestsStep?: {}
  drinkStep?: {}
  breakFastMainMailStep?: {}
  backClickHandler?: () => {}
}

const SurveyStepper: FC<Props> = ({ displayStepper, stepActive, dateStep, mealTypeStep, guestsStep, drinkStep, breakFastMainMailStep, backClickHandler }) => {

  const { surveyInfo, selectedSurvey } = useAppCtx()
  const [descriptions, setDescriptions] = useState({})

  const drinksDecription = drinkStep ? Object.keys(drinkStep) : []
  const breakFastMainMailDecription = breakFastMainMailStep ? Object.keys(breakFastMainMailStep) : []

  const { modeTheme } = useAppCtx();
  const { surveyStyles: { stepper } } = pagesStyles(modeTheme);

  // const steps = [
  //   {
  //     label: '1. Tipo de comida',
  //     description: selectedSurvey?.service,
  //   },
  //   {
  //     label: '2. Cantidad de comenzales',
  //     description: guestsStep ? `${guestsStep} personas` : '',
  //   },
  //   {
  //     label: '3. Bebida',
  //     description: drinkStep ? drinksDecription.join(', ') : '',
  //   },
  //   {
  //     label: '4. Comida',
  //     description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
  //   },
  //   {
  //     label: '5. Confirmar encuesta',
  //     description: ``,
  //   },
  // ];

  const steps = stepsFormatter(selectedSurvey?.service, guestsStep)

  const [activeStep, setActiveStep] = useState(stepActive);

  return (
    <>
      <Grid
        item
        xs={12}
        alignContent={'center'}
        justifyContent={'center'}
        sx={stepper.container}
      >
        <Card sx={stepper.card}>
          <CardContent>
            <Typography variant="h1" sx={stepper.title}>Resumen de la encuesta</Typography>
            <Typography variant="h1" sx={stepper.subtitle}>{moment(selectedSurvey?.date).format('LL')}</Typography>

            {
              displayStepper || stepActive === 0
                ? (
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.label} expanded={true} >
                          <StepLabel>
                            <b>{step.label}</b>
                          </StepLabel>
                          <StepContent>
                            <Typography>{step.description}</Typography>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                    {/* {activeStep === steps.length && (
                      <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                          Reset
                        </Button>
                      </Paper>
                    )} */}
                  </Box>
                )
                : (
                  null
                )
            }
            {
              stepActive === 3
                ? (
                  <>
                    <Grid container justifyContent={'space-between'} sx={{ mt: 2 }}>
                      <Button
                        sx={{
                          width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
                          borderRadius: "18px",
                          textTransform: "none",
                          padding: "10px",
                          fontSize: "14px",
                          backgroundColor: 'transparent',
                          border: '1px solid #40a39b',
                          color: "#40a39b",
                        }}
                        onClick={backClickHandler}
                      >
                        Volver
                      </Button>
                      <Button
                        sx={{
                          width: { xs: "100%", sm: "90%", lg: "20%", xl: "20%" },
                          borderRadius: "18px",
                          textTransform: "none",
                          padding: "10px",
                          fontSize: "14px",
                          backgroundColor: 'transparent',
                          border: '1px solid #40a39b',
                          color: "#40a39b",
                        }}
                      >
                        Enviar
                      </Button>
                    </Grid>
                  </>
                )
                : null
            }
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SurveyStepper