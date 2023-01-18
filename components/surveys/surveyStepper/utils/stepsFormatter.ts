import { guestsStepsType, selectedSurveyType } from "../../../../src/types/global"

const breakfastSteps = (
  selectedSurveyService?: string, 
  guestsStep?: number, 
  drinksDecription?: Array<string>, 
  breakFastMainMailDecription?: []) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        // description: selectedSurvey?.service,
        description: selectedSurveyService || ''
      },
      {
        label: '2. Cantidad de comenzales',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Bebida',
        description: drinksDecription ? drinksDecription.join(', ') : '',
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
        label: '3. Entrada',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '4. Plato Principal',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '5. Postre',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test almuerzo'
      },
      {
        label: '6. Confirmar encuesta',
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
        label: '3. Entrada',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '4. Plato Principal',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '5. Postre',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Cena'
      },
      {
        label: '6. Confirmar encuesta',
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
        label: '3. Entrada',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '4. Plato Principal',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '5. Postre',
        // description: breakFastMainMailDecription ? breakFastMainMailDecription.join(', ') : '',
        description: 'Test Olla Popular'
      },
      {
        label: '6. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const stepsFormatter = (
  selectedSurveyService: string, 
  guestsStep: guestsStepsType,
  drinksDecription: Array<string>,
  )
  : Array<{ label: string, description: string }> => {

  const guestsAmount = guestsStep.childs + guestsStep.kids + guestsStep.teens + guestsStep.adults

  switch (selectedSurveyService) {
    case 'desayuno':
      return breakfastSteps(selectedSurveyService, guestsAmount, drinksDecription)
      break;
    case 'almuerzo':
      return lunchSteps(selectedSurveyService, guestsAmount)
      break;
    case 'merienda':
      return meriendaSteps(selectedSurveyService, guestsAmount)
      break;
    case 'cena':
      return dinnerSteps(selectedSurveyService, guestsAmount)
      break;
    case 'Olla Popular':
      return ollaPopularSteps(selectedSurveyService, guestsAmount)
      break;
    default:
      return breakfastSteps()
      break;
  }
}


export default stepsFormatter