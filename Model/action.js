const increase = (state) => {
  return {
    ...state,
    value: state.value + 1,
  };
};

const decrease = (state) => {
  return {
    ...state,
    value: state.value - 1,
  };
};

const get = (state, callback) => {
  callback(state.value);
};
