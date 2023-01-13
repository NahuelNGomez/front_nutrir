
import FormPanel from '@components/ui/contents/FormPanel'
import SurveysAvailable from '@components/ui/contents/SurveysAvailable'
import { CircularProgress, Grid } from '@mui/material'
import { pagesStyles } from '@styles/index'
import React, { FC, useEffect, useState } from 'react'
import { dishesList } from '../../../src/contents/dishesList'
import { useAppCtx } from '../../../src/contexts/store'
import SurveyStepper from '../surveyStepper/SurveyStepper'
import axios from 'axios'

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
  dateStep: string
  setMealTypeStep: () => {}
  suerveyInfo: { comedor: number, fecha: string, funcionamiento: string },
}


const DishSelectionStep: FC<Props> = ({ handleGoToNextStep, handleGoToPreviousStep, dateStep, setMealTypeStep, suerveyInfo }) => {

  const { modeTheme, user, setModalLogin } = useAppCtx();
  const { surveyStyles: { dishSelection } } = pagesStyles(modeTheme);
  const [dailySurvey, setDailySurvey] = useState([])

  useEffect(() => {
    axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}encuesta/incompletas_dia/${suerveyInfo.comedor}/${suerveyInfo.fecha}`,
      { headers: { Authorization: `Bearer ${user.access_token}` } })
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          setDailySurvey(res.data.encuestas)
        }
      })
      .catch(err => {
        // console.log('err', err.response)
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })
  }, [user.access_token, suerveyInfo])


  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      justifyContent={"space-around"}
      sx={dishSelection.container}
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
          {
            dailySurvey
              ? (
                <SurveysAvailable surveys={dailySurvey} setMealTypeStep={setMealTypeStep} />
              )
              : (
                <CircularProgress
                  size={20}
                  // sx={loginStyles.utils.circularProgress}
                  sx={{
                    ml: "50%",
                    mt: '15%',
                  }}
                  color="inherit"
                />
              )
          }
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