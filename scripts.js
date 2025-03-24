import { subscribe, update, Action } from "./Model/store.js";

const handler = (prev, next) => console.log(prev, next);
const unsubscribe = subscribe(handler);

/**
 * @type {Notify}
 */
const htmlHandler = (next, prev) => {
  const div = document.createElement("div");
  div.innerText = next.value.toString();
  document.body.appendChild(div);
};

subscribe(htmlHandler);

/**
 * @type {Action}
 */
const customeAction = (state) => {
  return {
    ...state,
    value: state.value + 20,
  };
};
update(customeAction);
update(customeAction);
update(customeAction);
