import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import { useAppCtx } from '../../../../src/contexts/store';
import { pagesStyles } from "@styles/index";
import { FormikProps } from 'formik';
import { foodStepType, mealDataType } from '../../../../src/types/global';

type Props = {
  meal: mealDataType
  ingredienteName: string,
  ingredientId: number,
  picture: string,
  formikProps: FormikProps<any>,
}

const MealIngredientCard: FC<Props> = ({
  meal,
  ingredientId,
  ingredienteName,
  picture,
  formikProps,
}) => {

  const { modeTheme } = useAppCtx();
  const { surveyStyles: { ingredientsPanel } } = pagesStyles(modeTheme);

  const { setFieldValue } = formikProps

  const ingredientHandleChange = (e: any) => {

    const alimentos = formikProps.getFieldProps('alimento').value

    if (e.target.checked) {

      setFieldValue('comida', meal.id)
      setFieldValue('nombre', meal.nombre.toLocaleLowerCase())
      setFieldValue('alimento', [...alimentos, {
        id: ingredientId,
        nombre: e.target.name.toLocaleLowerCase()
      }])
    }

    if (e.target.checked === false) {

      const alimentosFiltered = alimentos.filter((alimento: foodStepType) => alimento.id !== ingredientId)
      if (alimentosFiltered.lenght > 0) {
        setFieldValue('comida', meal.id)
        setFieldValue('nombre', meal.nombre)
        setFieldValue('alimento', alimentosFiltered)
      } else {
        setFieldValue('comida', null)
        setFieldValue('nombre', '')
        setFieldValue('alimento', [])
      }
    }
  }

  return (
    <Grid
      item
      xs={6}
      sx={ingredientsPanel.compoundCard.container}
      justifyContent={'space-between'}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
        <div style={ingredientsPanel.compoundCard.imageContainer}>
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
          // checked={true}
          name={ingredienteName}
          onClick={(e) => ingredientHandleChange(e)}
        />

      </div>
    </Grid>
  )
}

export default MealIngredientCard