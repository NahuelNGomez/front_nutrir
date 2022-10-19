import { codeResetFields, emailResetFields, loginFields, passwordResetFields, registerFields, stateFormBase } from "../types/forms";

export function initialFormState<T>(Fields:T):stateFormBase<T> {

  type errorFieldsType<T> = {[Property in keyof T] : Boolean}

  //@ts-ignore
  const error_fields = Object.keys(Fields).reduce<errorFieldsType>((err,field:keyof T) => {
    err[field] = false;
    return err;
  },{});

 return {
    fields: Fields,
    errors: error_fields,
    process: { validate: true, loading: false },
  };
 
}

export const statesForms = {
  register: initialFormState<typeof registerFields>(registerFields),
  login: initialFormState<typeof loginFields>(loginFields),
  email_reset: initialFormState<typeof emailResetFields>(emailResetFields),
  code_reset: initialFormState<typeof codeResetFields>(codeResetFields),
  password_reset: initialFormState<typeof passwordResetFields>(passwordResetFields)
};

