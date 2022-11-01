import { statesForms } from "../constants/states";

export enum profileFields {
  user = "required",
  name = "required",
  phone = "required",
  email = "required",
  password = "optional"
}

export enum merenderoFields {
  name = "required",
  street = "required",
  number = "required",
  between_streets = "optional",
  province = "required"
}

export enum registerFields {
  user = "required",
  name = "required",
  phone = "required",
  email = "required",
  password = "required",
  exists_dinning_room = "required",
  dinning_room = "required"
};

export enum loginFields {
  email =  "required",
  password = "required",
};

export enum emailResetFields {
  email = "required"
};

export enum codeResetFields {
  code = "required",
  email = "required"
};

export enum passwordResetFields {
  password = "required",
  confirm_password = "required",
  token = "required",
};

export type stateFormBase<T> = {
  fields: T | any;
  errors: T | any;
  rules: T | any; 
  process: {
    validate: boolean;
    loading: boolean;
    finish:boolean;
  };
};

export type formBase = typeof statesForms;

export type SubmitForm = { token: string; success?: boolean; errors: any };

export enum ActionsForm {
  FETCH_FIELDS = "fetch_fields",
  FETCH_ERRORS = "fetch_errors",
  FETCH_PROCESS = "fetch_process",
}
