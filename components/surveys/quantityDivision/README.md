# División Automática de Cantidades

## Descripción

Esta funcionalidad permite dividir automáticamente la cantidad de comensales entre múltiples comidas en cada etapa de la encuesta. Cuando se seleccionan múltiples comidas en una etapa, el sistema divide automáticamente el total de comensales entre ellas.

## Ejemplos de Uso

### Escenario 1: Entrada con una comida
- **Comensales**: 100
- **Comidas**: Pan (1 comida)
- **Resultado**: 100 personas comieron pan

### Escenario 2: Plato principal con dos comidas
- **Comensales**: 100
- **Comidas**: Arroz, Carne (2 comidas)
- **Resultado**: 50 personas comieron arroz, 50 personas comieron carne

### Escenario 3: Postre con tres comidas
- **Comensales**: 100
- **Comidas**: Flan, Helado, Fruta (3 comidas)
- **Resultado**: 33 personas comieron flan, 33 personas comieron helado, 34 personas comieron fruta

## Archivos Principales

### `quantityDivider.ts`
- **Función principal**: `divideQuantitiesBetweenMeals()`
- **Función auxiliar**: `applyQuantityDivisionToAllSteps()`
- **Propósito**: Lógica para dividir cantidades entre múltiples comidas

### `useQuantityDivision.ts`
- **Hook personalizado** para manejar la división automática
- **Estado**: Mantiene el estado de división y las cantidades divididas
- **Uso**: Se integra en los componentes de pasos de comidas

### `QuantityDivisionInfo.tsx`
- **Componente visual** que muestra información sobre la división
- **Alertas**: Informa al usuario sobre cómo se dividieron las cantidades
- **Cálculos**: Muestra la distribución exacta de comensales

## Integración

### En los Pasos de Comidas
```tsx
import { useQuantityDivision } from '../hooks/useQuantityDivision'
import QuantityDivisionInfo from '../quantityDivision/QuantityDivisionInfo'

const { dividedMealStep, isDivided } = useQuantityDivision(
  mealStep, 
  guestsAmount, 
  true // Habilitar división automática
)
```

### En el Formulario de Envío
```tsx
import { applyQuantityDivisionToAllSteps } from './quantityDivider'

const stepsWithDividedQuantities = applyQuantityDivisionToAllSteps(
  guestsAmount,
  drinkStep,
  simpleMainMealStep,
  entryStep,
  compoundMainMealStep,
  dessertStep
)
```

## Algoritmo de División

1. **Calcular total de comensales**: Suma de todos los rangos de edad
2. **Identificar comidas con alimentos**: Filtrar comidas que tienen cantidades > 0
3. **Dividir cantidades**: `Math.floor(total / comidasCount)`
4. **Distribuir resto**: Las primeras comidas reciben +1 comensal si hay resto
5. **Aplicar a todos los alimentos**: Cada alimento de cada comida recibe la cantidad dividida

## Configuración

La división automática se puede habilitar/deshabilitar por paso:

```tsx
const { dividedMealStep, isDivided } = useQuantityDivision(
  mealStep, 
  guestsAmount, 
  enabled // true/false para habilitar/deshabilitar
)
```

## Logs de Debug

El sistema incluye logs detallados para debugging:

```javascript
console.log(`Dividiendo ${totalGuests} comensales entre ${comidasConAlimentos.length} comidas`)
console.log(`Cantidad por comida: ${cantidadPorComida}, Resto: ${resto}`)
console.log(`Comida ${comida.nombre}: ${cantidadParaEstaComida} comensales`)
```
