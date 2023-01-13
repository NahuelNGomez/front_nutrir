import { guestsStepsType, selectedSurveyType } from "../../../../src/types/global"

const breakfastSteps = (selectedSurveyService?: string, guestsStep?: number, drinkStep?: string, breakFastMainMailDecription?: []) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        // description: selectedSurvey?.service,
        description: selectedSurveyService || ''
      },
      {
        label: '2. Cantidad de comenzales',
        // description: guestsStep ? `${guestsStep} personas` : '',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Bebida',
        // description: drinkStep ? drinksDecription.join(', ') : '',
        description: 'test desayuno'
      },
      {
        label: '4. Comida',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'test desayuno'
      },
      {
        label: '5. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const lunchSteps = (selectedSurveyService?: string, guestsStep?: number, drinkStep?: string, breakFastMainMailDecription?: []) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        // description: selectedSurvey?.service,
        description: selectedSurveyService || ''
      },
      {
        label: '2. Cantidad de comenzales',
        // description: guestsStep ? `${guestsStep} personas` : '',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Bebida',
        // description: drinkStep ? drinksDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '4. Entrada',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '5. Plato Principal',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '6. Postre',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '7. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const meriendaSteps = (selectedSurveyService?: string, guestsStep?: number) => {
  return ([
    {
      label: '1. Tipo de comida',
      // description: selectedSurvey?.service,
      description: selectedSurveyService || ''
    },
    {
      label: '2. Cantidad de comenzales',
      // description: guestsStep ? `${guestsStep} personas` : '',
        description: `${guestsStep === 0 ? '' : guestsStep}`
    },
    {
      label: '3. Bebida',
      // description: drinkStep ? drinksDecription.join(', ') : '',
      description: 'TEST BEBIDA'
    },
    {
      label: '4. Entrada',
      // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
      description: 'Test almuerzo'
    },
    {
      label: '4. Plato Principal',
      // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
      description: 'Test almuerzo'
    },
    {
      label: '4. Postre',
      // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
      description: 'Test almuerzo'
    },
    {
      label: '5. Confirmar encuesta',
      description: ``,
    },
  ])
}

const dinnerSteps = (selectedSurveyService?: string, guestsStep?: number) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        description: selectedSurveyService || '',
      },
      {
        label: '2. Cantidad de comenzales',
        // description: guestsStep ? `${guestsStep} personas` : '',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Bebida',
        // description: drinkStep ? drinksDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '4. Entrada',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '4. Plato Principal',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '4. Postre',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '5. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const ollaPopularSteps = (selectedSurveyService?: string, guestsStep?: number) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        // description: selectedSurvey?.service,
        description: selectedSurveyService || ''
      },
      {
        label: '2. Cantidad de comenzales',
        // description: guestsStep ? `${guestsStep} personas` : '',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Bebida',
        // description: drinkStep ? drinksDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '4. Entrada',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '4. Plato Principal',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '4. Postre',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '5. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const stepsFormatter = (selectedSurveyService?: string, guestsStep?: number): Array<{ label: string, description: string }> => {

  switch (selectedSurveyService) {
    case 'Desayuno':
      return breakfastSteps(selectedSurveyService, guestsStep)
      break;
    case 'Almuerzo':
      return lunchSteps(selectedSurveyService, guestsStep)
      break;
    case 'Merienda':
      return meriendaSteps(selectedSurveyService, guestsStep)
      break;
    case 'Cena':
      return dinnerSteps(selectedSurveyService, guestsStep)
      break;
    case 'Olla Popular':
      return ollaPopularSteps(selectedSurveyService, guestsStep)
      break;
    default:
      return breakfastSteps()
      break;
  }
}


export default stepsFormatter