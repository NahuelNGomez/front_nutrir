import moment from "moment"
import { comedorInfoType, foodStepType, guestsStepsType, mealStepType, selectedSurveyType, userType } from "../../../../src/types/global"

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

  // FORMATTER

  const dataFormatter = (
    drinkStep?: mealStepType | null,
    simpleMainMealStep?: mealStepType | null,
    entryStep?: mealStepType,
    compoundMainMealStep?: mealStepType,
    dessertStep?: mealStepType
  ) => {

    const dateFormatted = moment(selectedSurvey.date).format('YYYY DD MM').replaceAll(' ', '-')

    const alimentosIdProvider = (alimentos: Array<foodStepType>) => {
      const alimentosId = alimentos.map(alimento => alimento.id)
      return alimentosId
    }

    const dataFormatted = {
      encuesta: {
        fecha: dateFormatted,
        cantidad_rango_1: guestsAmount.childs,
        cantidad_rango_2: guestsAmount.kids,
        cantidad_rango_3: guestsAmount.teens,
        cantidad_rango_4: guestsAmount.adults,
        // Nombre servicio: listo
        funcionamiento: selectedSurvey.service,
        // Id comedor
        comedor: comedorSeleccionado.id,
        // Id organización regional
        organizacion: comedorSeleccionado.organizacion_regional,
        // Id responsable
        responsable_comedor: user.pk
      },
      comida1: {
        // Id comida
        comida: drinkStep?.comida || entryStep?.comida,
        // Id alimentos
        alimento: drinkStep?.alimento && alimentosIdProvider(drinkStep?.alimento) || entryStep?.alimento && alimentosIdProvider(entryStep?.alimento)
      },
      comida2: {
        comida: simpleMainMealStep?.comida || compoundMainMealStep?.comida,
        alimento: simpleMainMealStep?.alimento && alimentosIdProvider(simpleMainMealStep?.alimento) || compoundMainMealStep?.alimento && alimentosIdProvider(compoundMainMealStep?.alimento)
      },
      comida3: {
        comida: dessertStep ? dessertStep?.comida : null,
        alimento: dessertStep?.alimento ? alimentosIdProvider(dessertStep?.alimento) : null
      }
    }
    return dataFormatted
  }
  
  // CASES
  
  if (selectedSurvey.service === 'desayuno' || selectedSurvey.service === 'merienda') {
    const data = dataFormatter(drinkStep, simpleMainMealStep)
    return data
  } else if (selectedSurvey.service === 'almuerzo' || selectedSurvey.service === 'cena') {
    const data = dataFormatter(null, null, entryStep, compoundMainMealStep, dessertStep)
    return data
  }

}

export default submitContentFormatter