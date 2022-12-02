import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardContent, Checkbox, Grid } from '@mui/material';

import MealIngredientCard from './MealIngredientCard';

type compositionType = {
  ingredienteName: string,
  picture: string
}
type mealsType = {
  compound: boolean;
  name: string;
  composition?: Array<compositionType>
}

type Props = {
  meals: Array<mealsType>
  setDrinkStep: () => {}
  drinkStep: {}
}

const CustomAccordion: React.FC<Props> = ({ meals, setDrinkStep, drinkStep }) => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const ingredientHandleChange = (e: any) => {
    if (e.target.checked === true) {
      setDrinkStep({
        ...drinkStep,
        [e.target.name]: e.target.checked
      })
    } else {
      delete drinkStep[e.target.name]
    }
  }



  return (
    <div style={{ gap: '1rem' }}>
      {
        meals.map((e, index) => {
          return (
            e.compound
              ? (
                <div key={`key+${e.name}`} style={{ marginBottom: '0.5rem' }}>
                  <Accordion sx={{ pt: 1, pb: 1 }} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {e.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container xs={12} justifyContent={'space-between'}>
                        {
                          e.composition
                            ? e.composition.map(({ ingredienteName, picture }) => {
                              return (
                                <MealIngredientCard
                                  setDrinkStep={setDrinkStep}
                                  drinkStep={drinkStep}
                                  ingredienteName={ingredienteName}
                                  picture={picture}
                                  key={`${ingredienteName}_key`}
                                // ingredientHandleChange={ingredientHandleChange}
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
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 1.5,
                        borderRadius: '5px',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <Typography sx={{ paddingLeft: 1.5 }}>
                        {e.name}
                      </Typography>
                      <Checkbox
                        name={e.name}
                        onClick={(e) => ingredientHandleChange(e)}
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

export default CustomAccordion