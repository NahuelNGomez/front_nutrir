import { Button, CircularProgress, Grid } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'
import { useAppCtx } from '../../../src/contexts/store'
import { pagesStyles } from '@styles/index'
import { mealStepType } from '../../../src/types/global'
import { Formik, FormikProps } from 'formik'
import axios from 'axios'
import mealInitialValues from './constants/mealInitialValues'


type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const CompoundMainDishStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}) => {

  const { modeTheme, setStepActive, setCompoundMainMailStep, user, setModalLogin, selectedSurvey, compoundMainMealStep } = useAppCtx();
  const { surveyStyles: { mealStep } } = pagesStyles(modeTheme);
  const [comidas, setComidas] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [noComidasFound, setNoComidasFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    setNoComidasFound(false)
    const timeoutId = setTimeout(() => {
      console.log('Timeout alcanzado, deteniendo loading')
      setLoading(false)
    }, 10000)

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const service = selectedSurvey.service
    const url = `${baseUrl}comida/servicio/${service}`
    const headers = { headers: { Authorization: `Bearer ${user.access_token}` } }

    axios.get(url, headers)
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
          clearTimeout(timeoutId)
          setLoading(false)
        } else {
          const data = res.data.data["plato principal"]
          console.log('Datos recibidos:', data)
          console.log('Tipo de datos:', typeof data)
          console.log('Es array:', Array.isArray(data))
          console.log('Longitud:', data?.length)

          if (!data || !Array.isArray(data) || data.length === 0) {
            console.log('No hay platos principales disponibles')
            clearTimeout(timeoutId)
            setNoComidasFound(true)
            setLoading(false)
            return
          }

          const dataComidas = data.map(async (comida: any) => {
            try {
              const info = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}comida/${comida.id}`,
                { headers: { Authorization: `Bearer ${user.access_token}` } })
              return info
            } catch (error) {
              console.log('comida data error', error);
            }
          })

          const promisesFormatted = async () => {
            try {
              const promises = await Promise.all(dataComidas)
              const res = promises.map((e) => e?.data?.data).filter(Boolean)
              setComidas(res)
              console.log('Platos principales procesados:', res)
              clearTimeout(timeoutId)
              setLoading(false)
            } catch (error) {
              console.log('promesas catch', error)
              clearTimeout(timeoutId)
              setLoading(false)
            }
          }
          promisesFormatted()
        }
      })
      .catch(err => {
        clearTimeout(timeoutId)
        setLoading(false)
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })
  }, [user.access_token, selectedSurvey])

  const handleBackBtn = () => {
    handleGoToPreviousStep()
    setCompoundMainMailStep(mealInitialValues)
    setStepActive(3)
  }

  return (
    <>
      {
        loading
          ? <CircularProgress />
          : noComidasFound
            ? (
              <>
                <Grid container justifyContent="center" sx={{ py: 4 }}>
                  <Grid item xs={12} textAlign="center">
                    <h3>No se encontraron platos principales disponibles</h3>
                    <p>No hay platos principales disponibles para el servicio seleccionado. Puedes continuar sin seleccionar plato principal.</p>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between" sx={{ py: 2 }}>
                  <Button
                    onClick={handleBackBtn}
                    sx={mealStep.button}
                  >
                    Volver
                  </Button>
                  <Button
                    onClick={() => {
                      // Continuar sin plato principal
                      setCompoundMainMailStep(mealInitialValues)
                      setStepActive(4)
                      handleGoToNextStep()
                    }}
                    sx={mealStep.button}
                  >
                    Continuar sin plato principal
                  </Button>
                </Grid>
              </>
            )
            : comidas.length > 0
              ? (
                <Formik
                  initialValues={compoundMainMealStep}
                  onSubmit={(values) => {
                    setCompoundMainMailStep(values)
                    setStepActive(4)
                    handleGoToNextStep()
                  }}
                >
                  {(props: FormikProps<any>) => {
                    return (
                      <>
                        <form onSubmit={props.handleSubmit}>
                          <IngredientsPanel
                            formikProps={props}
                            meals={comidas}
                          />
                          <Grid
                            container xs={12}
                            justifyContent={"space-between"}
                            sx={{ pt: 0 }}
                          >
                            <Button
                              onClick={handleBackBtn}
                              sx={mealStep.button}
                            >
                              Volver
                            </Button>
                            <Button
                              sx={mealStep.button}
                              type='submit'
                            >
                              Siguiente
                            </Button>
                          </Grid>
                        </form>
                      </>
                    )
                  }
                  }
                </Formik>
              )
              : <CircularProgress />
      }
    </>

  )
}

export default CompoundMainDishStep