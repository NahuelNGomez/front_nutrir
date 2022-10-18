import { FormLoginData,FormResetEmailData,FormResetCodeData, FormResetPasswordData } from "../types/forms";

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

export const initialResetCodeState:FormResetCodeData = {
  fields: {
    code: "",
    email:""
  },
  errors: {
    code: false,
    email:false
  },
  process: {
    validate: true,
    loading: false,
  },
};

export const initialResetPasswordState:FormResetPasswordData = {
  fields: {
    password: "",
    confirm_password:"",
    token:""
  },
  errors: {
    password: false,
    confirm_password:false,
    token:false
  },
  process: {
    validate: true,
    loading: false,
  },
};
