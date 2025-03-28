import { Action } from "./action.js";
import { reducer } from "./reducers.js";

/**
 * Initial state of app
 * @typedef {object} State
 * @property {number} value
 */
export const initialState = {
  value: 0,
};

/**
 * Array of subscribers
 * @type {Array<subscriber>}
 */
let subscribers = [];

/**
 * array of states with the newest being added to the front of the array.
 * Initial value given to the state array is the initialState.
 * @type {Array<State>}
 */
const states = [initialState];

/**
 * Receives curent state and logs it.
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

  /**
   * calls subscribers with previous and next state.
   * @param {Subscription} item
   */
  const handler = (item) => item(prev, next);
  subscribers.forEach(handler);

  states.unshift(next);
};

/**
 *
 *
 * @param {Subscription} Subscription
 */
export const subscribe = (Subscription) => {
  subscribers.push(Subscription);
  const handler = (item) => item !== Subscription;

  /**
   * unsubscribes the subscriber
   */
  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler);
    subscribers = newSubscribers;
  };
  return unsubscribe;
};
