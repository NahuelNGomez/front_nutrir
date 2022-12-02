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

type Props = {
  displayStepper?: boolean
  stepActive?: number
  dateStep?: string
  mealTypeStep?: string
  guestsStep?: {}
  drinkStep?: {}
  breakFastMainMailStep?: {}
  backClickHandler:()=>{}
}

const SurveyStepper: FC<Props> = ({ displayStepper, stepActive, dateStep, mealTypeStep, guestsStep, drinkStep, breakFastMainMailStep, backClickHandler }) => {

  // console.log(drinkStep);


  const { surveyInfo } = useAppCtx()
  const [descriptions, setDescriptions] = useState({})

  const drinksDecription = drinkStep ? Object.keys(drinkStep) : []
  const breakFastMainMailDecription = breakFastMainMailStep ? Object.keys(breakFastMainMailStep) : []

  // console.log({drinksDecription});


  const steps = [
    {
      label: '1. Tipo de comida',
      description: mealTypeStep,
    },
    {
      label: '2. Cantidad de comenzales',
      description: `${guestsStep} personas`,
    },
    {
      label: '3. Bebida',
      description: drinksDecription.join(', '),
    },
    {
      label: '4. Comida',
      description: breakFastMainMailDecription.join(', '),
    },
    {
      label: '5. Confirmar encuesta',
      description: `Description.`,
    },
  ];

  const [activeStep, setActiveStep] = useState(stepActive);

  return (
    <>
      <Grid
        item
        xs={11}
        sx={{ height: '500px', mt: 3, }}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <Card sx={{ height: '100%', borderRadius: '5px' }}>
          <CardContent>
            <Typography variant="h1" sx={{ fontSize: '1rem', mb: '1rem' }}>1. ¿Qué comida vas a cargar?</Typography>
            <Typography variant="h1" sx={{ mb: '1rem' }}>{moment(dateStep).format('LL')}</Typography>

            {
              displayStepper || stepActive === 0
                ? (
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.label}>
                          <StepLabel>
                            {step.label}
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
                    <Grid container justifyContent={'space-between'} sx={{ mt: 4 }}>
                      <Button
                        sx={{
                          width: { xs: "100%", sm: "90%", lg: "80%", xl: "20%" },
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
                          width: { xs: "100%", sm: "90%", lg: "80%", xl: "20%" },
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