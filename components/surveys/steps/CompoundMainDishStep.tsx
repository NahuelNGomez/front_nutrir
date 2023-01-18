import { Button, CircularProgress, Grid } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'
import { useAppCtx } from '../../../src/contexts/store'
import { pagesStyles } from '@styles/index'
import { mealStepType } from '../../../src/types/global'
import { Formik, FormikProps } from 'formik'
import axios from 'axios'


const mockMeals = [
  {
    id: 2,
    nombre: "Pastel de Papa",
    foto: "http://50.116.44.91:3600/media/images/pastel.jpeg",
    horario: "almuerzo_cena_plato_principal",
    cantidad_porcion: "1.00",
    hidratos_carbono: "1.00",
    proteinas: "1.00",
    grasas: "1.00",
    energia: "1.00",
    alimento: [
      {
        id: 1,
        nombre: "Papa",
        cantidad_porcion: 1,
        hidratos_carbono: 1,
        proteinas: 1,
        grasas: 0.92,
        energia: 1,
        foto: "http://50.116.44.91:3600/media/images/papas.jpeg"
      },
      {
        id: 2,
        nombre: "Carne",
        cantidad_porcion: 2,
        hidratos_carbono: 2,
        proteinas: 2,
        grasas: 2,
        energia: 2,
        foto: "http://50.116.44.91:3600/media/images/carne.jpeg"
      }
    ]
  },
  {
    id: 3,
    nombre: "Guiso de Prueba",
    foto: "http://50.116.44.91:3600/media/images/Guiso_de_Prueba.jpeg",
    horario: "almuerzo_cena_plato_principal",
    cantidad_porcion: "280.00",
    hidratos_carbono: "65.60",
    proteinas: "31.00",
    grasas: "2.20",
    energia: "406.20",
    alimento: [
      {
        id: 8,
        nombre: "Huevo",
        cantidad_porcion: 50,
        hidratos_carbono: 0,
        proteinas: 6,
        grasas: 6,
        energia: 78,
        foto: "http://50.116.44.91:3600/media/images/Huevo.jpeg"
      },
      {
        id: 10,
        nombre: "Arvejas",
        cantidad_porcion: 50,
        hidratos_carbono: 4,
        proteinas: 0,
        grasas: 1,
        energia: 20,
        foto: "http://50.116.44.91:3600/media/images/Arvejas.jpeg"
      },
      {
        id: 7,
        nombre: "Arroz - Fideos",
        cantidad_porcion: 60,
        hidratos_carbono: 42,
        proteinas: 7.2,
        grasas: 0,
        energia: 196.8,
        foto: "http://50.116.44.91:3600/media/images/Arroz_-_Fideos.jpeg"
      }
    ]
  },
  {
    id: 4,
    nombre: "Arroz con Vegetales Prueba",
    foto: "http://50.116.44.91:3600/media/images/Arroz_con_Vegetales.jpeg",
    horario: "almuerzo_cena_plato_principal",
    cantidad_porcion: "150.00",
    hidratos_carbono: "60.00",
    proteinas: "6.00",
    grasas: "5.00",
    energia: "10.00",
    alimento: [
      {
        id: 4,
        nombre: "Vegetales",
        cantidad_porcion: 50,
        hidratos_carbono: 4,
        proteinas: 0.5,
        grasas: 0,
        energia: 18,
        foto: "http://50.116.44.91:3600/media/images/Vegetales.jpeg"
      },
      {
        id: 10,
        nombre: "Arvejas",
        cantidad_porcion: 50,
        hidratos_carbono: 4,
        proteinas: 0,
        grasas: 1,
        energia: 20,
        foto: "http://50.116.44.91:3600/media/images/Arvejas.jpeg"
      },
      {
        id: 7,
        nombre: "Arroz - Fideos",
        cantidad_porcion: 60,
        hidratos_carbono: 42,
        proteinas: 7.2,
        grasas: 0,
        energia: 196.8,
        foto: "http://50.116.44.91:3600/media/images/Arroz_-_Fideos.jpeg"
      }
    ]
  }
]


type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const CompoundMainDishStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}) => {

  const { modeTheme, setStepActive, setCompoundMainMailStep, user, setModalLogin, selectedSurvey } = useAppCtx();
  const { surveyStyles: { mealStep } } = pagesStyles(modeTheme);
  const [comidas, setComidas] = useState<Array<any>>([])

  useEffect(() => {

    axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}comida/servicio/cena`,
      { headers: { Authorization: `Bearer ${user.access_token}` } })
      .then(res => {
        if (res.status === 401) {
          setModalLogin(true)
        } else {
          const data = res.data.data["plato principal"]
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
              setComidas(res)
            } catch (error) {
              console.log('promesas catch', error)
            }
          }
          promisesFormatted()

          // setComidas(dataComidas)
        }
      })
      .catch(err => {
        // console.log('err', err.response)
        if (err.response.status === 401) {
          setModalLogin(true)
        }
      })
  }, [user.access_token])

  const initialValues: mealStepType = {
    comida: null,
    nombre: '',
    alimento: []
  }

  const handleBackBtn = () => {
    handleGoToPreviousStep()
    setCompoundMainMailStep(initialValues)
    setStepActive(3)
  }



  return (
    <>
      {
        comidas.length > 0
          ? (
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                setCompoundMainMailStep(values)
                setStepActive(4)
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
                        meals={mockMeals}
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