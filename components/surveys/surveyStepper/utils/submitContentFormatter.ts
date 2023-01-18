import { comedorInfoType, guestsStepsType, mealStepType, selectedSurveyType, userType } from "../../../../src/types/global"

const submitContentFormatter = (
  user: userType,
  comedorSeleccionado: comedorInfoType,
  selectedSurvey: selectedSurveyType,
  guestsAmount: guestsStepsType,
  drinkStep: mealStepType,
  simpleMainMealStep: mealStepType,
  entryStep: mealStepType,
  compoundMainMealStep: mealStepType,
  dessertStep: mealStepType
) => {

  const dataFormatter = (
    drinkStep?: mealStepType,
    simpleMainMealStep?: mealStepType,
    entryStep?: mealStepType,
    compoundMainMealStep?: mealStepType,
    dessertStep?: mealStepType
    ) => {
    const dataFormatted = {
      encuesta: {
        fecha: selectedSurvey.date,
        cantidad_rango_1: guestsAmount.childs,
        cantidad_rango_2: guestsAmount.kids,
        cantidad_rango_3: guestsAmount.teens,
        cantidad_rango_4: guestsAmount.adults,
        funcionamiento: selectedSurvey.service,
        comedor: comedorSeleccionado.id,
        organizacion: comedorSeleccionado.organizacion_regional,
        responsable_comedor: user.last_name + ' ' + user.first_name
      },
      comida1: {
        comida: drinkStep?.nombre || entryStep?.comida,
        alimento: drinkStep?.alimento || entryStep?.alimento
      },
      comida2: {
        comida: simpleMainMealStep?.comida || compoundMainMealStep?.comida,
        alimento: simpleMainMealStep?.alimento || compoundMainMealStep?.alimento
      },
      comida3: {
        comida: dessertStep?.comida || null,
        alimento: dessertStep?.alimento || null
      }
    }
    return dataFormatted
  }

  if (selectedSurvey.service === 'desayuno' || selectedSurvey.service === 'merienda') {
    const data = dataFormatter(drinkStep, simpleMainMealStep)
    return data
  }

  if(selectedSurvey.service === 'almuerzo' || selectedSurvey.service === 'cena'){
    const data = dataFormatter(entryStep, compoundMainMealStep, dessertStep)
    return data
  }

  return ''

}

export default submitContentFormatter