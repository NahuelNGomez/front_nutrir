import { useRouter } from "next/router";
import React, { Reducer, useReducer } from "react";
import { ActionsForm } from "../types/forms";

export default function useForm<T>(
  reducer: Reducer<any, any>,
  initialState: T
) {
  const [Form, dispatch] = useReducer(reducer, initialState);

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

  const submit = async (e: React.FormEvent, action: string) => {
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
          reject(false);
        }
      } else {
        setProcess({ validate: true, loading: false });
        reject(false);
      }
    });
  };

  return { ...Form, submit, updateField };
}
