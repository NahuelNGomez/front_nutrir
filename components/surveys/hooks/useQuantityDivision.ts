import { useEffect, useState } from 'react'
import { guestsStepsType, mealStepType } from '../../../src/types/global'
import { divideQuantitiesBetweenMeals } from '../surveyStepper/utils/quantityDivider'

/**
 * Hook personalizado para manejar la división automática de cantidades
 * entre múltiples comidas en un paso de la encuesta
 */
export const useQuantityDivision = (
  mealStep: mealStepType,
  guestsAmount: guestsStepsType,
  enabled: boolean = true
) => {
  const [dividedMealStep, setDividedMealStep] = useState<mealStepType>(mealStep)
  const [isDivided, setIsDivided] = useState(false)

  useEffect(() => {
    if (!enabled || !mealStep.comidas || mealStep.comidas.length === 0) {
      setDividedMealStep(mealStep)
      setIsDivided(false)
      return
    }

    // Verificar si hay múltiples comidas con alimentos
    const comidasConAlimentos = mealStep.comidas.filter(comida => 
      comida.alimento && comida.alimento.length > 0 && 
      comida.alimento.some(alimento => alimento.quantity > 0)
    )

    if (comidasConAlimentos.length <= 1) {
      setDividedMealStep(mealStep)
      setIsDivided(false)
      return
    }

    // Aplicar división automática
    const divided = divideQuantitiesBetweenMeals(mealStep, guestsAmount)
    setDividedMealStep(divided)
    setIsDivided(true)

    console.log(`División automática aplicada: ${comidasConAlimentos.length} comidas`)
  }, [mealStep, guestsAmount, enabled])

  return {
    dividedMealStep,
    isDivided,
    resetDivision: () => {
      setDividedMealStep(mealStep)
      setIsDivided(false)
    }
  }
}

export default useQuantityDivision
