import FormPanel from "@components/ui/contents/FormPanel"
import { Card, CardContent, Grid, TextField } from "@mui/material"
import { FC, useState } from "react"
// import { guessType } from "../../../pages/surveys"
import { guestType } from "../../../src/types/global"
import GuestsPanel from "../GuestsPanel/GuestsPanel"
import SurveyStepper from "../surveyStepper/SurveyStepper"

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
  setDateStep: () => {}
  dateStep: string
  setMealTypeStep: () => {}
  mealTypeStep: string
  setGuestStep: () => {}
  guestsStep: {}
}

const PopulationStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
  setDateStep,
  dateStep,
  mealTypeStep,
  guestsStep,
  setGuestStep
}) => {

  // const [guests, setGuests] = useState<guestType>()
  const [displayStepper, setDisplayStepper] = useState(false)

  const handleChange = (e: any) => {
    e.preventDefault()
    console.log({
      name: e.target.name,
      value: e.target.value
    });

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
          <GuestsPanel
            setGuestStep={setGuestStep}
            guestsStep={guestsStep}
          />
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
          stepActive={0} />
      </Grid>

    </Grid>
  )
}

export default PopulationStep