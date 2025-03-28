import { initialState } from "./store.js";
import { Action } from "./action.js ";

/**
 * Reducer function that updates the application state based on the dispatched action.
 *
 * @param {State} state - The current state of the application.
 * @param {Action} action - The action to be processed.
 * @returns {State} The new state of the application after applying the action.
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "subtract": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "reset": {
      return {
        ...state,
        value: 0,
      };
    }

    default:
      return state;
  }
};
