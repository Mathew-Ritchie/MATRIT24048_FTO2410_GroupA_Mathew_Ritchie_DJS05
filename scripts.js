import { subscribe, dispatch, getState } from "./Model/store.js";
import { add, subtract, reset } from "./Model/action.js";

subscribe((_, next) => {
  console.log(_, next);
});

//calling of

dispatch(getState());

dispatch(add());
dispatch(add());

dispatch(subtract());

dispatch(reset());
