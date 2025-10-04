import { mealStepType } from "../../../../src/types/global"

const mealDescriptionFormatter = (mealData: mealStepType) => {
  console.log('mealDescriptionFormatter - mealData:', mealData)
  if (!mealData.comidas || mealData.comidas.length === 0) {
    return ''
  }
  
  // Filtrar solo las comidas que tienen alimentos con cantidades > 0
  const comidasConAlimentos = mealData.comidas.filter(comida => 
    comida.alimento && comida.alimento.length > 0 && 
    comida.alimento.some(alimento => alimento.quantity > 0)
  )
  
  if (comidasConAlimentos.length === 0) {
    return ''
  }
  
  if (comidasConAlimentos.length === 1) {
    // Si solo hay una comida, mostrar formato simple
    const comida = comidasConAlimentos[0]
    const ingredients = comida.alimento
      .filter(alimento => alimento.quantity > 0)
      .map(alimento => {
        const quantity = alimento.quantity || 0
        const unit = alimento.unit || ''
        return `- ${alimento.nombre}${quantity > 0 ? `(${quantity}${unit ? unit : ''})` : ''}`
      })
    return `**${comida.nombre}**:\n${ingredients.join('\n')}`
  } else {
    // Si hay múltiples comidas, mostrar formato con viñetas
    return comidasConAlimentos.map(comida => {
      const ingredients = comida.alimento
        .filter(alimento => alimento.quantity > 0)
        .map(alimento => {
          const quantity = alimento.quantity || 0
          const unit = alimento.unit || ''
          return `- ${alimento.nombre}${quantity > 0 ? `(${quantity}${unit ? unit : ''})` : ''}`
        })
      return `**${comida.nombre}**:\n${ingredients.join('\n')}`
    }).join('\n\n')
  }
}

export default mealDescriptionFormatter