import { guestsStepsType, selectedSurveyType } from "../../../../src/types/global"

const simpleSurveySteps = (
  selectedSurveyService: string, 
  guestsStep: number, 
  drinksDecription: string, 
  simpleMainMealDescription: string) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        description: selectedSurveyService || ''
      },
      {
        label: '2. Cantidad de comenzales',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Bebida',
        description: drinksDecription,
      },
      {
        label: '4. Comida',
        description: simpleMainMealDescription 
      },
      {
        label: '5. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const compoundSurveySteps = (
  selectedSurveyService: string, 
  guestsStep: number,
  entryDescription: string, 
  compoundMainMealDescription: string,
  dessertStep: string,
  ) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        description: selectedSurveyService || ''
      },
      {
        label: '2. Cantidad de comenzales',
        description: `${guestsStep === 0 ? '' : guestsStep}`
      },
      {
        label: '3. Entrada',
        description: entryDescription
      },
      {
        label: '4. Plato Principal',
        description: compoundMainMealDescription
      },
      {
        label: '5. Postre',
        description: dessertStep
      },
      {
        label: '6. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}


const stepsProvider = (
  selectedSurveyService: string, 
  guestsStep: guestsStepsType,
  drinksDecription: string,
  simpleMainMealDescription: string,
  entryDescription: string,
  compoundMainMealDescription: string,
  dessertStep: string,
  )
  : Array<{ label: string, description: string }> => {

  const guestsAmount = guestsStep.childs + guestsStep.kids + guestsStep.teens + guestsStep.adults

  switch (selectedSurveyService) {
    case 'desayuno':
      return simpleSurveySteps(selectedSurveyService, guestsAmount, drinksDecription, simpleMainMealDescription)
      break;
    case 'almuerzo':
      return compoundSurveySteps(selectedSurveyService, guestsAmount, entryDescription, compoundMainMealDescription, dessertStep)
      break;
    case 'merienda':
      return simpleSurveySteps(selectedSurveyService, guestsAmount, drinksDecription, simpleMainMealDescription)
      break;
    case 'cena':
      return compoundSurveySteps(selectedSurveyService, guestsAmount, entryDescription, compoundMainMealDescription, dessertStep)
      break;
    case 'Olla Popular':
      return compoundSurveySteps(selectedSurveyService, guestsAmount, entryDescription, compoundMainMealDescription, dessertStep)
      break;
    default:
      return simpleSurveySteps(selectedSurveyService, guestsAmount, drinksDecription, simpleMainMealDescription)
      break;
  }
}

export default stepsProvider