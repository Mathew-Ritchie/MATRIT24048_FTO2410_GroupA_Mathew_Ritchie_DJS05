/**
 * @typedef { {type: 'add'} |{type: subtract} | {type: get} } Action
 */

export const add = () => {
  return {
    type: "add",
  };
};

export const subtract = () => {
  return {
    type: "subtract",
  };
};

export const reset = () => {
  return {
    type: "reset",
  };
};

export const Action = {};
