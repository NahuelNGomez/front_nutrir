import { FormLoginData,FormResetEmailData } from "../types/forms";

export const initialLoginFormState:FormLoginData = {
  fields: {
    email: "",
    password: "",
  },
  errors: {
    email: false,
    password: false,
  },
  process: {
    validate: true,
    loading: false,
  },
};

export const initialResetFormState:FormResetEmailData = {
  fields: {
    email: "",
  },
  errors: {
    email: false,
  },
  process: {
    validate: true,
    loading: false,
  },
};
