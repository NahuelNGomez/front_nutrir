import { initialLoginFormState } from "../constants/states";
import { ActionsForm } from "../types/forms";

export type ActionReducer =
  | { type: ActionsForm.FETCH_FIELDS; payload: typeof initialLoginFormState.fields }
  | { type: ActionsForm.FETCH_ERRORS; payload: typeof initialLoginFormState.errors }
  | { type: ActionsForm.FETCH_PROCESS; payload: typeof initialLoginFormState.process };


function buildReducer<T>(initialState:T)
{
    const reducer = (state = initialState,action:ActionReducer) => {
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

    return reducer;
}

export default buildReducer;
