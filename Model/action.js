import { initialState } from "./store.js";

/**
 * @typedef { {type: 'increase'} |{type: decrease} | {type: get} } Action
 */

export const increase = () => {
  return {
    type: "increase",
  };
};

export const decrease = () => {
  return {
    type: "decrease",
  };
};

export const get = (callback) => {
  return {
    type: "get",
    callback: callback,
  };
};

export const Action = {};
