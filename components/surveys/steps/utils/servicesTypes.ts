import { ReactComponentElement } from "react"
import BreakFastMailStep from "../BreakFastMailStep"
import DishSelectionStep from "../DishSelectionStep"
import DrinksStep from "../DrinksStep"
import SelectSurveyStep from "../SelectSurveyStep"
import SubmitStep from "../SubmitStep"
import GuestsStep from "../GuestsStep"
import SimpleMainDishStep from "../SimpleMainDishStep"
import EntryDishStep from "../EntryDishStep"
import CompoundMainDishStep from "../CompoundMainDishStep"
import DessertDishStep from "../DessertDishStep"

const breakfastSteps: Array<any> = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué bebida sirvieron?',
    subtitle: 'Selecciona el tipo de bebida y los componentes que la integran.',
    content: DrinksStep
  },
  {
    title: '4. ¿Qué comida sirvieron?',
    subtitle: 'Selecciona el tipo de comida y los componentes que la integran si es que se necesitan.',
    content: BreakFastMailStep
  },
  {
    title: 'Resumen de la encuesta',
    subtitle: '',
    content: SubmitStep
  },
]

const lunchSteps: Array<any> = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué bebida sirvieron?',
    subtitle: 'Selecciona el tipo de bebida y los componentes que la integran.',
    content: DrinksStep
  },
  {
    title: '4. ¿Qué entrada sirvieron?',
    subtitle: 'Selecciona el tipo de entrada y los componentes que la integran si es que se necesitan.',
    content: EntryDishStep
  },
  {
    title: '5. ¿Qué plato principal sirvieron?',
    subtitle: 'Selecciona el tipo de plato principal y los componentes que la integran si es que se necesitan.',
    content: CompoundMainDishStep
  },
  {
    title: '6. ¿Qué postre sirvieron?',
    subtitle: 'Selecciona el tipo de postre y los componentes que la integran si es que se necesitan.',
    content: DessertDishStep
  },
  {
    title: 'Resumen de la encuesta',
    subtitle: '',
    content: SubmitStep
  },
]

const meriendaSteps: Array<any> = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué bebida sirvieron?',
    subtitle: 'Selecciona el tipo de bebida y los componentes que la integran.',
    content: DrinksStep
  },
  {
    title: '4. ¿Qué comida sirvieron?',
    subtitle: 'Selecciona el tipo de comida y los componentes que la integran si es que se necesitan.',
    content: SimpleMainDishStep
  },
  {
    title: 'Resumen de la encuesta',
    subtitle: '',
    content: SubmitStep
  },
]

const dinnerSteps: Array<any> = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué bebida sirvieron?',
    subtitle: 'Selecciona el tipo de bebida y los componentes que la integran.',
    content: DrinksStep
  },
  {
    title: '4. ¿Qué entrada sirvieron?',
    subtitle: 'Selecciona el tipo de entrada y los componentes que la integran si es que se necesitan.',
    content: EntryDishStep
  },
  {
    title: '5. ¿Qué plato principal sirvieron?',
    subtitle: 'Selecciona el tipo de plato principal y los componentes que la integran si es que se necesitan.',
    content: CompoundMainDishStep
  },
  {
    title: '6. ¿Qué postre sirvieron?',
    subtitle: 'Selecciona el tipo de postre y los componentes que la integran si es que se necesitan.',
    content: DessertDishStep
  },
  {
    title: 'Resumen de la encuesta',
    subtitle: '',
    content: SubmitStep
  },
]

const ollaPopularSteps: Array<any> = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué bebida sirvieron?',
    subtitle: 'Selecciona el tipo de bebida y los componentes que la integran.',
    content: DrinksStep
  },
  {
    title: '4. ¿Qué entrada sirvieron?',
    subtitle: 'Selecciona el tipo de entrada y los componentes que la integran si es que se necesitan.',
    content: EntryDishStep
  },
  {
    title: '5. ¿Qué plato principal sirvieron?',
    subtitle: 'Selecciona el tipo de plato principal y los componentes que la integran si es que se necesitan.',
    content: CompoundMainDishStep
  },
  {
    title: '6. ¿Qué postre sirvieron?',
    subtitle: 'Selecciona el tipo de postre y los componentes que la integran si es que se necesitan.',
    content: DessertDishStep
  },
  {
    title: 'Resumen de la encuesta',
    subtitle: '',
    content: SubmitStep
  },
]


const servicesType = (surveyType?: string): Array<any> => {

  switch (surveyType) {
    case 'Desayuno':
      return breakfastSteps
      break;
    case 'Almuerzo':
      return lunchSteps
      break;
    case 'Merienda':
      return meriendaSteps
      break;
    case 'Cena':
      return dinnerSteps
      break;
    case 'Olla Popular':
      return ollaPopularSteps
      break;
    default:
      return breakfastSteps
      break;
  }
}


export default servicesType