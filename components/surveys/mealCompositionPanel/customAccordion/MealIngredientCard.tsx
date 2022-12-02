import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import { useAppCtx } from '../../../../src/contexts/store';

import { pagesStyles } from "@styles/index";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type Props = {
  ingredienteName: string,
  picture: string
  // ingredientHandleChange?: any
  setDrinkStep: ()=>{}
  drinkStep: {
  }
}

const MealIngredientCard: FC<Props> = ({ ingredienteName, picture, setDrinkStep, drinkStep }) => {

  const { modeTheme } = useAppCtx();
  const { editStyles } = pagesStyles(modeTheme);

  const ingredientHandleChange = (e:any)=>{
    console.log(e.target.name);
    console.log('value', e.target.checked);
    setDrinkStep({
      ...drinkStep,
      [e.target.name]: e.target.checked
    })
  }

  return (
    <Grid
      item
      xs={6}
      sx={{
        p: '0.5rem 1rem',
        display: 'flex',
        flexDirection: 'row',
      }}
      justifyContent={'space-between'}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'relatve', width: '35px', height: '35px' }}>
          <Image
            src={picture}
            alt={`${picture}_img`}
            width={35}
            height={35}
          />
        </div>

        <Typography>
          {ingredienteName}
        </Typography>

      </div>
      <div>
        <Checkbox
          // {...label}
          name={ingredienteName}
          onClick={(e) => ingredientHandleChange(e)}
        />

      </div>
    </Grid>
  )
}

export default MealIngredientCard