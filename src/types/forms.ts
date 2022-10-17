
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

export enum ActionsForm {
  FETCH_FIELDS = "fetch_fields",
  FETCH_ERRORS = "fetch_errors",
  FETCH_PROCESS = "fetch_process",
}
