import { Button, Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import LoggedLayout from "@components/layouts/LoggedLayout";
export { getServerSideProps } from "../../src/serverSideProps"
import { pagesStyles } from "@styles/index";
import { useAppCtx } from "../../src/contexts/store";
import SurveysAvailable from "@components/ui/contents/SurveysAvailable";
import { dishesList } from "../../src/contents/dishesList";
import { Box } from "@mui/system";
import SurveyPanel from "@components/ui/contents/SurveyPanel";
import { FC, useState } from "react";
import DishSelectionStep from "../../components/surveys/steps/DishSelectionStep";
import GuestsPanel from "../../components/surveys/GuestsPanel/GuestsPanel";
import PopulationStep from "../../components/surveys/steps/PopulationStep";
import { guestType } from "../../src/types/global";
import DrinksStep from "../../components/surveys/steps/DrinksStep";
import BreakFastMailStep from "../../components/surveys/steps/BreakFastMailStep";
import SubmitStep from "../../components/surveys/steps/SubmitStep";


const stepsBreakfast: Array<any> = [
  { label: '¿Qué día vas a cargar?', content: SurveyPanel },
  { label: '1. ¿Qué comida vas a cargar?', content: DishSelectionStep },
  { label: '2. ¿Cuántos comenzales tienes?', content: PopulationStep },
  { label: '3. ¿Qué bebida serviste?', content: DrinksStep },
  { label: '4. ¿Qué comida sirvieron?', content: BreakFastMailStep },
  { label: 'Resumen de la encuesta', content: SubmitStep },
]

const stepsLunch: Array<any> = [
  { label: '¿Qué día vas a cargar?', content: SurveyPanel },
  { label: '1. ¿Qué comida vas a cargar?', content: SurveyPanel },
  { label: '2. ¿Cuántos comenzales tienes?', content: SurveyPanel },
  { label: '3. ¿Cuál fue la entrada?', content: SurveyPanel },
  { label: '4. ¿Cuál fue el plato principal?', content: SurveyPanel },
  { label: '5. ¿Cuál fue el postre?', content: SurveyPanel },
]



const DailySurvers: NextPage = () => {
  const { modeTheme } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);
  const [activeStep, setActiveStep] = useState(0)

  const [dateStep, setDateStep] = useState<string>()
  const [suerveyInfo, setSurveyInfo] = useState<{ comedor: number, fecha: string, funcionamiento: string }>()
  const [mealTypeStep, setMealTypeStep] = useState<string>()
  const [guestsStep, setGuestStep] = useState<{}>({
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0
  })
  const [drinkStep, setDrinkStep] = useState<string>()
  const [breakFastMainMailStep, setBreakFastMainMealStep] = useState<string>()
  const [firstDishStep, setFirstDishStep] = useState<string>()
  const [midDishStep, setMidDishStep] = useState<string>()
  const [thirdDishStep, setThirdDishStep] = useState<string>()

  const ActiveStepComponent = stepsBreakfast[activeStep].content

  const handleGoToNextStep = () => {
    setActiveStep(Math.min(activeStep + 1, Object.values(stepsBreakfast).length - 1))

  }
  const handleGoToPreviousStep = () => {
    setActiveStep(Math.max(activeStep - 1, 0))
  }


  return (
    <LoggedLayout>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-around"}
        sx={surveyStyles.container}
      >
        <Grid
          item
          xs={12}
          lg={12}
        >
          <Typography sx={surveyStyles.title}>
            COMPLETAR ENCUESTAS
          </Typography>
          <Divider />
        </Grid>

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

      </Grid>
    </LoggedLayout>
  );
};

export default DailySurvers;
