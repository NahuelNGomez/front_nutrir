import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { Card, Checkbox, Grid } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MealIngredientCard from './MealIngredientCard';
import { useAppCtx } from '../../../../src/contexts/store';
import { FormikProps } from 'formik';
import { foodDataType, mealDataType } from '../../../../src/types/global';
import { pagesStyles } from '@styles/index';

type Props = {
  formikProps: FormikProps<any>;
  meals: Array<mealDataType>
}

const IngredientsPanel: React.FC<Props> = ({
  formikProps,
  meals
}) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles: { ingredientsPanel } } = pagesStyles(modeTheme);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [singleMealCheck, setSingleMealCheck] = useState<number>(0)

  const { setFieldValue, values } = formikProps

  useEffect(() => {
    // Inicializar con las comidas ya seleccionadas
    if(values.comidas && values.comidas.length > 0){
      const selectedMealIds = values.comidas.map(comida => comida.comida)
      setSingleMealCheck(selectedMealIds)
    }
  }, [values])  
  
  const checkInfoProvider = (id:number):boolean =>{
    if(Array.isArray(singleMealCheck)) {
      return singleMealCheck.includes(id)
    }
    return singleMealCheck === id
  }

  // MUI Accordion handleChange 
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // SimpleMealCard - Ahora soporta múltiples comidas
  const simpleMealHandleChange = (e: any, id: number, nombre: string, alimento: Array<foodDataType>) => {
    const currentComidas = values.comidas || []

    if (e.target.checked) {
      // Agregar la comida seleccionada
      const newComida = {
        comida: id,
        nombre: nombre,
        alimento: []
      }
      const updatedComidas = [...currentComidas, newComida]
      setFieldValue('comidas', updatedComidas)
      
      // Actualizar el estado local
      const currentSelected = Array.isArray(singleMealCheck) ? singleMealCheck : [singleMealCheck]
      setSingleMealCheck([...currentSelected, id])
    } else {
      // Remover la comida deseleccionada
      const updatedComidas = currentComidas.filter(comida => comida.comida !== id)
      setFieldValue('comidas', updatedComidas)
      
      // Actualizar el estado local
      const currentSelected = Array.isArray(singleMealCheck) ? singleMealCheck : [singleMealCheck]
      setSingleMealCheck(currentSelected.filter(mealId => mealId !== id))
    }
  }

  return (
    <div style={{ gap: '1rem' }}>
      {
        meals.map((meal, index) => {

          const { nombre, alimento, id } = meal

          return (
            alimento.length > 0
              ? (
                // Compound Meal Card
                <div key={`key+${nombre}`} style={{ marginBottom: '0.5rem' }}>
                  <Accordion
                    sx={ingredientsPanel.container.box}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ ml: 1.5 }}
                    >
                      <Typography sx={{ width: {xs: '70%', sm: '70%', md: '70%', lg: '33%', xl: '33%'}, flexShrink: 0 }}>
                        {nombre}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ingredientsPanel.container.details}>
                      <Grid container xs={12} justifyContent={'space-between'}>
                        {
                          alimento
                            ? alimento.map(({ nombre, foto, id }) => {
                              return (
                                <MealIngredientCard
                                  meal={meal}
                                  ingredientId={id}
                                  ingredienteName={nombre}
                                  picture={foto}
                                  formikProps={formikProps}
                                  key={`${nombre}_key`}
                                />
                              )
                            })
                            : null
                        }
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>)
              : (
                // Simple Meal Card
                <div>
                  <Grid
                    item xs={12}
                  >
                    <Card
                      sx={ingredientsPanel.simpleCard.container}
                    >
                      <Grid item>
                        <Typography sx={ingredientsPanel.simpleCard.title}>
                          {nombre}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Checkbox
                          checked={checkInfoProvider(id)}
                          sx={{ mr: 0.5, }}
                          name={nombre}
                          onClick={(e) => simpleMealHandleChange(e, id, nombre, alimento)}
                        />
                      </Grid>
                    </Card>
                  </Grid>
                </div>
              )
          )
        })
      }
    </div>
  );
}


export default IngredientsPanel