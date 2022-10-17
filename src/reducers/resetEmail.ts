import {  initialResetFormState } from "../constants/states";
import { ActionsForm } from "../types/forms";

export type ActionResetEmailReducer =
  | { type: ActionsForm.FETCH_FIELDS; payload: typeof initialResetFormState.fields }
  | { type: ActionsForm.FETCH_ERRORS; payload: typeof initialResetFormState.errors }
  | { type: ActionsForm.FETCH_PROCESS; payload: typeof initialResetFormState.process };


export function resetEmailReducer(state = initialResetFormState, action: ActionResetEmailReducer) {
    switch (action.type) {
      case ActionsForm.FETCH_FIELDS:
        return { ...state, fields: action.payload };
      case ActionsForm.FETCH_ERRORS:
        return { ...state, errors: action.payload };
      case ActionsForm.FETCH_PROCESS:
        return { ...state, process: action.payload };
      default:
        return state;
    }
}