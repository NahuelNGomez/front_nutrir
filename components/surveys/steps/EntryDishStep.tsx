import { Button, CircularProgress, Grid } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'
import { useAppCtx } from '../../../src/contexts/store'
import { pagesStyles } from '@styles/index'
import { Formik, FormikProps } from 'formik'
import { mealStepType } from '../../../src/types/global'
import mealInitialValues from './constants/mealInitialValues'
import mockMeals from './mocks/mockMeals'
import axios from 'axios'

type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const EntryDishStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}) => {

  const { modeTheme, setStepActive, setEntryStep, entryStep, user, selectedSurvey, setModalLogin } = useAppCtx();
  const { surveyStyles: { mealStep } } = pagesStyles(modeTheme);
  const [comida, setComida] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [noComidasFound, setNoComidasFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    setNoComidasFound(false)

    // Timeout de seguridad para evitar loading infinito
    const timeoutId = setTimeout(() => {
      console.log('Timeout alcanzado, deteniendo loading')
      setLoading(false)
    }, 10000) // 10 segundos

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const service = selectedSurvey.service
    const url = `${baseUrl}comida/servicio/${service}`
    const headers = { headers: { Authorization: `Bearer ${user.access_token}` } }

    axios.get(url, headers)
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          const data = res.data.data.entrada
          console.log('Datos recibidos:', data)
          console.log('Tipo de datos:', typeof data)
          console.log('Es array:', Array.isArray(data))
          console.log('Longitud:', data?.length)
          
          // Verificar si hay comidas disponibles
          if (!data || !Array.isArray(data) || data.length === 0) {
            console.log('No hay comidas disponibles')
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
              const res = promises.map((e) => e.data.data)
              console.log('Comidas procesadas:', res)
              clearTimeout(timeoutId)
              setComida(res)
              setLoading(false)
              // console.log({res});

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
        if (err.response && err.response.status === 401) {
          setModalLogin(true)
        } else if (err.code === "ERR_NETWORK") {
          alert('No es posible la conexión con el servidor')
        }
      })

  }, [user, selectedSurvey])


  const handleBackBtn = () => {
    handleGoToPreviousStep()
    setEntryStep(mealInitialValues)
    setStepActive(2)
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
                    <h3>No se encontraron comidas de entrada disponibles</h3>
                    <p>No hay comidas de entrada disponibles para el servicio seleccionado. Puedes continuar sin seleccionar entrada.</p>
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
                      // Continuar sin entrada
                      setEntryStep(mealInitialValues)
                      setStepActive(3)
                      handleGoToNextStep()
                    }}
                    sx={mealStep.button}
                  >
                    Continuar sin entrada
                  </Button>
                </Grid>
              </>
            )
            : comida.length > 0
              ? (
                <Formik
                  initialValues={entryStep}
                  onSubmit={(values) => {
                    setEntryStep(values)
                    setStepActive(3)
                    handleGoToNextStep()

                  }}
                // validationSchema={validationSchema}
                >
                  {(props: FormikProps<any>) => {                

                    return (
                      <>
                        <form onSubmit={props.handleSubmit}>
                          <IngredientsPanel
                            formikProps={props}
                            meals={comida}
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
                      </>)
                  }
                  }
                </Formik>
              )
              : <CircularProgress />
      }
    </>
  )
}

export default EntryDishStep