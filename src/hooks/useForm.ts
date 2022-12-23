import React, { useReducer } from "react";
import buildReducer from "../reducers";
import {
  ActionsForm,
  stateFormBase,
  SubmitForm,
} from "../types/forms";

export default function useForm<T>(initialState: stateFormBase<T>) {
  const reducer = buildReducer<T>(initialState);
  const [Form, dispatch] = useReducer(reducer, initialState);

  const defaultValues = (values:typeof Form.fields) => {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...values},
    });
  }

  const updateFieldProps = (field: string, value: any) => {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...Form.fields, [field]: value },
    });
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionsForm.FETCH_FIELDS,
      payload: { ...Form.fields, [e.target.name]: e.target.value },
    });
  };

  const validateFields = (): boolean => {
    const errors = Object.keys(Form.fields).reduce((err: any, field) => {
      err[field] =   !Form.fields[field] && !Form.rules[field].includes('optional');
      return err;
    }, {});

    dispatch({
      type: ActionsForm.FETCH_ERRORS,
      payload: errors,
    });

    return Object.values(errors).reduce<boolean>(
      (valid, value) => (!valid ? false : !value),
      true
    );
  };

  const setProcess = ({ validate, loading,finish }: typeof Form.processing) => {
    dispatch({
      type: ActionsForm.FETCH_PROCESS,
      payload: { validate, loading,finish },
    });
  };

  const submit = async (
    e: React.FormEvent,
    action: string
  ): Promise<SubmitForm> => {
    e.preventDefault();

    return new Promise(async (resolve, reject) => {
      setProcess({ validate: true, loading: true,finish:false });

      if (validateFields()) {
        const response = await fetch(action, {
          method: "POST",
          body: JSON.stringify(Form.fields),
        }).then((res) => res.json());

        if (response.success) {
          resolve(response); 
          
        } else {
          setProcess({ validate: false, loading: false,finish:false });

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
        setProcess({ validate: true, loading: false,finish:false });
        reject({ errors: {} });
      }
    });
  };

  const finishProcess = () => {
    setProcess({ validate: true, loading: false,finish:true });
  }
  return { ...Form, submit, updateField, updateFieldProps,defaultValues,finishProcess };
}
