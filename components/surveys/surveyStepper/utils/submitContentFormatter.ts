import { comedorInfoType, foodStepType, guestsStepsType, mealStepType, selectedSurveyType, userType } from "../../../../src/types/global"
import { postFormatterDate } from "../../steps/utils/formatterDate";

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

    const dateFormatted = postFormatterDate(selectedSurvey.date)

    const alimentosFormattedProvider = (alimentos: Array<foodStepType>) => {
      const alimentosId = alimentos.map((alimento) => {
        const alimentoFormatted = {
          alimento: alimento.id,
          cantidad: alimento.quantity,
          unidad: alimento.unitId || 1 // Usar unitId si existe, sino usar 1 por defecto
        }
        return alimentoFormatted
      })
      return alimentosId
    }

    const dataFormatted = {
      encuesta: {
        fecha: dateFormatted,
        cantidad_rango_1: guestsAmount.childs || 0,
        cantidad_rango_2: guestsAmount.kids || 0,
        cantidad_rango_3: guestsAmount.teens || 0,
        cantidad_rango_4: guestsAmount.adults || 0,
        // Nombre servicio
        funcionamiento: selectedSurvey.service,
        // Id comedor
        comedor: comedorSeleccionado.id,
        // Id organización regional
        organizacion: comedorSeleccionado.organizacion_regional,
        // Id responsable
        responsable_comedor: user.pk
      },
      comidas: [
        // Comidas de entrada (solo si tienen datos)
        ...(entryStep?.comidas?.filter(comida => 
          comida.alimento && comida.alimento.length > 0 && 
          comida.alimento.some(alimento => alimento.quantity > 0)
        )?.map(comida => ({
          comida: comida.comida,
          alimento: alimentosFormattedProvider(comida.alimento)
        })) || []),
        // Comidas de plato principal (solo si tienen datos)
        ...(compoundMainMealStep?.comidas?.filter(comida => 
          comida.alimento && comida.alimento.length > 0 && 
          comida.alimento.some(alimento => alimento.quantity > 0)
        )?.map(comida => ({
          comida: comida.comida,
          alimento: alimentosFormattedProvider(comida.alimento)
        })) || []),
        // Comidas de postre (solo si tienen datos)
        ...(dessertStep?.comidas?.filter(comida => 
          comida.alimento && comida.alimento.length > 0 && 
          comida.alimento.some(alimento => alimento.quantity > 0)
        )?.map(comida => ({
          comida: comida.comida,
          alimento: alimentosFormattedProvider(comida.alimento)
        })) || []),
        // Comidas de bebida (solo si tienen datos)
        ...(drinkStep?.comidas?.filter(comida => 
          comida.alimento && comida.alimento.length > 0 && 
          comida.alimento.some(alimento => alimento.quantity > 0)
        )?.map(comida => ({
          comida: comida.comida,
          alimento: alimentosFormattedProvider(comida.alimento)
        })) || []),
        // Comidas simples (solo si tienen datos)
        ...(simpleMainMealStep?.comidas?.filter(comida => 
          comida.alimento && comida.alimento.length > 0 && 
          comida.alimento.some(alimento => alimento.quantity > 0)
        )?.map(comida => ({
          comida: comida.comida,
          alimento: alimentosFormattedProvider(comida.alimento)
        })) || [])
      ]
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
  return {}
}

export default submitContentFormatter