export type FormLoginData = {
  fields: {
    email: string;
    password: string;
  };
  errors: {
    email: boolean;
    password: boolean;
  };
  process: {
    validate: boolean;
    loading: boolean;
  };
};

export type FormResetEmailData = {
  fields: {
    email: string;
  };
  errors: {
    email: boolean;
  };
  process: {
    validate: boolean;
    loading: boolean;
  };
};

export type FormResetCodeData = {
  fields: {
    code: string;
    email: string;
  };
  errors: {
    code: boolean;
    email: boolean;
  };
  process: {
    validate: boolean;
    loading: boolean;
  };
};

export type FormResetPasswordData = {
  fields: {
    password: string;
    confirm_password: string;
    token: string;
  };
  errors: {
    password: boolean;
    confirm_password: boolean;
    token: boolean;
  };
  process: {
    validate: boolean;
    loading: boolean;
  };
};

export type SubmitForm = { token: string; success?: boolean; errors: any };

export enum ActionsForm {
  FETCH_FIELDS = "fetch_fields",
  FETCH_ERRORS = "fetch_errors",
  FETCH_PROCESS = "fetch_process",
}
