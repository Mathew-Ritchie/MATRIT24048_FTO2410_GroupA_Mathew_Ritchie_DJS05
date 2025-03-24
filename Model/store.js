import { Action } from "./action.js";
import { reducer } from "./reducers.js";

export const initialState = {
  value: 0,
};

/**
 * @type {Array<subscriber>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
const states = [initialState];

/**
 *
 * @returns {State}
 */
export const getState = () => {
  //console.log("getState returning:", states[0]);
  return Object.freeze({ ...states[0] });
};

/**
 * @param {Action}
 */

export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  const handler = (item) => item(prev, next);
  subscribers.forEach(handler);

  states.unshift(next);
};

/**
 * @param {Subscription} Subscription
 */
export const subscribe = (Subscription) => {
  subscribers.push(Subscription);
  const handler = (item) => item !== Subscription;

  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler);
    subscribers = newSubscribers;
  };
  return unsubscribe;
};
