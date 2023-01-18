import { Button, Grid } from '@mui/material'
import React, { FC } from 'react'
import IngredientsPanel from '../mealCompositionPanel/customAccordion/IngredientsPanel'
import { useAppCtx } from '../../../src/contexts/store'
import { pagesStyles } from '@styles/index'
import { Formik, FormikProps } from 'formik'
import { mealStepType } from '../../../src/types/global'

const mockMeals = [
  {
    id: 2,
    nombre: "Leche Chocolatada",
    foto: "http://50.116.44.91:3600/media/images/pastel.jpeg",
    horario: "almuerzo_cena_plato_principal",
    cantidad_porcion: "1.00",
    hidratos_carbono: "1.00",
    proteinas: "1.00",
    grasas: "1.00",
    energia: "1.00",
    alimento: [
      {
        id: 2,
        nombre: "Leche",
        foto: "http://50.116.44.91:3600/media/images/carne.jpeg",
        cantidad_porcion: "2.00",
        hidratos_carbono: "2.00",
        proteinas: "2.00",
        grasas: "2.00",
        energia: "2.00"
      },
      {
        id: 1,
        nombre: "Cacao",
        foto: "http://50.116.44.91:3600/media/images/papas.jpeg",
        cantidad_porcion: "1.00",
        hidratos_carbono: "1.00",
        proteinas: "1.00",
        grasas: "0.92",
        energia: "1.00"
      },
      {
        id: 1,
        nombre: "Azucar",
        foto: "http://50.116.44.91:3600/media/images/papas.jpeg",
        cantidad_porcion: "1.00",
        hidratos_carbono: "1.00",
        proteinas: "1.00",
        grasas: "0.92",
        energia: "1.00"
      }
    ]
  },
  {
    id: 2,
    nombre: "Yogurt",
    foto: "http://50.116.44.91:3600/media/images/pastel.jpeg",
    horario: "almuerzo_cena_plato_principal",
    cantidad_porcion: "1.00",
    hidratos_carbono: "1.00",
    proteinas: "1.00",
    grasas: "1.00",
    energia: "1.00",
    alimento: []
  }
]


type Props = {
  handleGoToNextStep: () => {}
  handleGoToPreviousStep: () => {}
}

const DrinksStep: FC<Props> = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}) => {

  const { modeTheme, setDrinkStep, drinkStep, setStepActive } = useAppCtx();
  const { surveyStyles: { drinks } } = pagesStyles(modeTheme);

  const initialValues: mealStepType = {
    comida: null,
    nombre: '',
    alimento: []
  }

  const handleBackBtn = () => {
    handleGoToPreviousStep()
    setDrinkStep(initialValues)
    setStepActive(1)
  }

  return (
    <>
      <Formik
        initialValues={drinkStep}
        onSubmit={(values) => {
          // console.log({values});
          setDrinkStep(values)
          setStepActive(2)          
          handleGoToNextStep()

        }}
      // validationSchema={validationSchema}
      >
        {(props: FormikProps<any>) => {

          console.log('values', props.values);

          return (<>
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
                  sx={drinks.button}
                >
                  Volver
                </Button>
                <Button
                  sx={drinks.button}
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
    </>

  )
}

export default DrinksStep