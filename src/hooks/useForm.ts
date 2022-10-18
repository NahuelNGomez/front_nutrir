import React, { Reducer, useReducer } from "react";
import { statesForms } from "../constants/states";
import buildReducer from "../reducers";
import {
  ActionsForm,
  formBase,
  SubmitForm,
} from "../types/forms";

export default function useForm<T>(form: keyof formBase) {
  const initialState = statesForms[form];
  const reducer = buildReducer<T>(initialState);
  const [Form, dispatch] = useReducer(reducer, initialState);

  const updateFieldProps = (field:string,value:any) =>
  {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...Form.fields, [field]: value },
    });
  }

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...Form.fields, [e.target.name]: e.target.value },
    });
  };

  const validateFields = (): boolean => {
    let errors: any = {};
    let valid = true;

    Object.keys(Form.fields).map((key) => {
      errors[key] = !Form.fields[key];
      if (!Form.fields[key]) {
        valid = false;
      }
    });

    dispatch({
      type: ActionsForm.FETCH_ERRORS,
      payload: errors,
    });

    return valid;
  };

  const setProcess = ({ validate, loading }: typeof Form.process) => {
    dispatch({
      type: ActionsForm.FETCH_PROCESS,
      payload: { validate, loading },
    });
  };

  const submit = async (
    e: React.FormEvent,
    action: string
  ): Promise<SubmitForm> => {
    e.preventDefault();

    return new Promise(async (resolve, reject) => {
      setProcess({ validate: true, loading: true });

      if (validateFields()) {
        const response = await fetch(action, {
          method: "POST",
          body: JSON.stringify(Form.fields),
        }).then((res) => res.json());

        if (response.success) {
          resolve(response);
        } else {
          setProcess({ validate: false, loading: false });

          if (response.errors) {
            dispatch({
              type: ActionsForm.FETCH_ERRORS,
              payload: response.errors,
            });
            reject({ errors: response.errors });
          } else {
            reject({ errors: {} });
          }
        }
      } else {
        setProcess({ validate: true, loading: false });
        reject({ errors: {} });
      }
    });
  };

  return { ...Form, submit, updateField,updateFieldProps };
}
