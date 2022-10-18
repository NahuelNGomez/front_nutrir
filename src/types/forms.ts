import { statesForms } from "../constants/states";

export enum registerFields {
  user = "",
  name = "",
  phone = "",
  email = "",
  password = "",
  exists_dinning_room = "",
  dinning_room = ""
};

export enum loginFields {
  email =  "",
  password = "",
};

export enum emailResetFields {
  email = ""
};

export enum codeResetFields {
  code = "",
  email = ""
};

export enum passwordResetFields {
  password = "",
  confirm_password = "",
  token = "",
};

export type stateFormBase<T> = {
  fields: T | any;
  errors: T | any;
  process: {
    validate: boolean;
    loading: boolean;
  };
};

export type formBase = typeof statesForms;

export type SubmitForm = { token: string; success?: boolean; errors: any };

export enum ActionsForm {
  FETCH_FIELDS = "fetch_fields",
  FETCH_ERRORS = "fetch_errors",
  FETCH_PROCESS = "fetch_process",
}
