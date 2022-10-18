import { codeResetFields, emailResetFields, loginFields, passwordResetFields, registerFields, stateFormBase } from "../types/forms";

export function initialFormState<T>(Fields:T):stateFormBase<T> {
  
 return {
    fields: Fields,
    errors: Fields,
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

