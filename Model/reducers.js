import { initialState } from "./store.js";
import { Action } from "./action.js ";

export const reducer = (state, action) => {
  //console.log("Reducer received state:", state);
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "decrease": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "get": {
      action.callback(state.value);
      return state;
    }

    default:
      return state;
  }
};
