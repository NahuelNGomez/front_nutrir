import { guestsStepsType, mealStepType, foodStepType } from "../../../../src/types/global"

/**
 * Calcula el total de comensales de todos los rangos de edad
 */
const getTotalGuests = (guestsAmount: guestsStepsType): number => {
  return (guestsAmount.childs || 0) + 
         (guestsAmount.kids || 0) + 
         (guestsAmount.teens || 0) + 
         (guestsAmount.adults || 0) + 
         (guestsAmount.elderly || 0)
}

/**
 * Divide automáticamente las cantidades de alimentos entre múltiples comidas
 * Si hay múltiples comidas en una etapa, divide la cantidad total de comensales entre ellas
 */
export const divideQuantitiesBetweenMeals = (
  mealStep: mealStepType, 
  guestsAmount: guestsStepsType
): mealStepType => {
  if (!mealStep.comidas || mealStep.comidas.length === 0) {
    return mealStep
  }

  const totalGuests = getTotalGuests(guestsAmount)
  
  // Filtrar solo las comidas que tienen alimentos con cantidades > 0
  const comidasConAlimentos = mealStep.comidas.filter(comida => 
    comida.alimento && comida.alimento.length > 0 && 
    comida.alimento.some(alimento => alimento.quantity > 0)
  )

  // Si solo hay una comida o ninguna, no dividir
  if (comidasConAlimentos.length <= 1) {
    return mealStep
  }

  // Calcular la cantidad dividida por comida
  const cantidadPorComida = Math.floor(totalGuests / comidasConAlimentos.length)
  const resto = totalGuests % comidasConAlimentos.length

  console.log(`Dividiendo ${totalGuests} comensales entre ${comidasConAlimentos.length} comidas`)
  console.log(`Cantidad por comida: ${cantidadPorComida}, Resto: ${resto}`)

  // Aplicar la división a cada comida
  const comidasActualizadas = mealStep.comidas.map((comida, index) => {
    // Solo procesar comidas que tienen alimentos
    const tieneAlimentos = comida.alimento && comida.alimento.length > 0 && 
                          comida.alimento.some(alimento => alimento.quantity > 0)
    
    if (!tieneAlimentos) {
      return comida
    }

    // Calcular la cantidad para esta comida (distribuir el resto en las primeras comidas)
    let cantidadParaEstaComida = cantidadPorComida
    if (index < resto) {
      cantidadParaEstaComida += 1
    }

    // Actualizar las cantidades solo de los alimentos que tienen cantidad > 0
    const alimentosActualizados = comida.alimento.map(alimento => {
      // Solo aplicar división automática si el alimento ya tiene una cantidad > 0
      if (alimento.quantity > 0) {
        return {
          ...alimento,
          quantity: cantidadParaEstaComida
        }
      }
      // Si no tiene cantidad, mantenerlo como está (quantity: 0)
      return alimento
    })

    console.log(`Comida ${comida.nombre}: ${cantidadParaEstaComida} comensales`)

    return {
      ...comida,
      alimento: alimentosActualizados
    }
  })

  return {
    ...mealStep,
    comidas: comidasActualizadas
  }
}

/**
 * Aplica la división de cantidades a todos los pasos de comidas
 */
export const applyQuantityDivisionToAllSteps = (
  guestsAmount: guestsStepsType,
  drinkStep: mealStepType,
  simpleMainMealStep: mealStepType,
  entryStep: mealStepType,
  compoundMainMealStep: mealStepType,
  dessertStep: mealStepType
) => {
  return {
    drinkStep: divideQuantitiesBetweenMeals(drinkStep, guestsAmount),
    simpleMainMealStep: divideQuantitiesBetweenMeals(simpleMainMealStep, guestsAmount),
    entryStep: divideQuantitiesBetweenMeals(entryStep, guestsAmount),
    compoundMainMealStep: divideQuantitiesBetweenMeals(compoundMainMealStep, guestsAmount),
    dessertStep: divideQuantitiesBetweenMeals(dessertStep, guestsAmount)
  }
}

export default divideQuantitiesBetweenMeals
