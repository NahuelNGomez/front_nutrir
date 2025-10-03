import * as yup from 'yup';

const validationSchema = yup.object({
  childs: yup.number()
    .transform((value, originalValue) => {
      return originalValue === '' || originalValue === null || originalValue === undefined ? 0 : value;
    })
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer("Must be more than 0"),
  kids: yup.number()
    .transform((value, originalValue) => {
      return originalValue === '' || originalValue === null || originalValue === undefined ? 0 : value;
    })
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer(),
  teens: yup.number()
    .transform((value, originalValue) => {
      return originalValue === '' || originalValue === null || originalValue === undefined ? 0 : value;
    })
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer(),
  adults: yup.number()
    .transform((value, originalValue) => {
      return originalValue === '' || originalValue === null || originalValue === undefined ? 0 : value;
    })
    .min(0, "El numero de comensales no puede ser menor a cero")
    .integer(),
});

export default validationSchema