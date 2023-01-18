import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Checkbox, Grid } from '@mui/material';

import MealIngredientCard from './MealIngredientCard';
import { useAppCtx } from '../../../../src/contexts/store';
import { FormikProps } from 'formik';
import { foodDataType, foodStepType, mealDataType } from '../../../../src/types/global';
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
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { setFieldValue } = formikProps


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const simpleMealHandleChange = (e: any, id: number, nombre: string, alimento: Array<foodDataType>) => {

    if (e.target.checked) {
      setFieldValue('comida', id)
      setFieldValue('nombre', nombre.toLocaleLowerCase())
      setFieldValue('alimento', [])
    }

    if (e.target.checked === false) {
      setFieldValue('comida', null)
      setFieldValue('nombre', '')
      setFieldValue('alimento', [])
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
                <div key={`key+${nombre}`} style={{ marginBottom: '0.5rem' }}>
                  <Accordion sx={{ pt: 1, pb: 1 }} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {nombre}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                <div>
                  <Grid
                    item xs={12}
                  >
                    <Card
                      sx={ingredientsPanel.simpleCard.container}
                    >
                      <Typography sx={ingredientsPanel.simpleCard.title}>
                        {nombre}
                      </Typography>
                      <Checkbox
                        name={nombre}
                        // disabled={true}
                        onClick={(e) => simpleMealHandleChange(e, id, nombre, alimento)}
                      />
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