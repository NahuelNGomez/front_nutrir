import { initialLoginFormState } from "../constants/states";
import { ActionsForm } from "../types/forms";

export type ActionLoginReducer =
  | { type: ActionsForm.FETCH_FIELDS; payload: typeof initialLoginFormState.fields }
  | { type: ActionsForm.FETCH_ERRORS; payload: typeof initialLoginFormState.errors }
  | { type: ActionsForm.FETCH_PROCESS; payload: typeof initialLoginFormState.process };


export function loginReducer(state = initialLoginFormState, action: ActionLoginReducer) {
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