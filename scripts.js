// import { subscribe, update, Action } from "./Model/store.js";

// const handler = (prev, next) => console.log(prev, next);
// const unsubscribe = subscribe(handler);

// /**
//  * @type {Notify}
//  */
// const htmlHandler = (next, prev) => {
//   const div = document.createElement("div");
//   div.innerText = next.value.toString();
//   document.body.appendChild(div);
// };

// subscribe(htmlHandler);

// /**
//  * @type {Action}
//  */
// const customeAction = (state) => {
//   return {
//     ...state,
//     value: state.value + 20,
//   };
// };
// update(customeAction);
// update(customeAction);
// update(customeAction);

import { subscribe, dispatch, getState } from "./Model/store.js";
import { increase, decrease, get } from "./Model/action.js";

subscribe((_, next) => {
  console.log(next);
  // console.log("Value from next state:", next.value);
});

dispatch(get((value) => console.log(value)));
dispatch(increase());
dispatch(increase());
dispatch(increase());
dispatch(decrease());
dispatch(get((value) => console.log(value)));
