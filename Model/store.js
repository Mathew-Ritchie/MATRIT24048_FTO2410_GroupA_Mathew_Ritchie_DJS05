/**
 * @typedef {object} Item
 * @prop {number} value
 */

/**
 * @typedef {object} state
 * @prop { Item} value
 */

/**
 * @callback Notify
 * @param {state} next
 * @param {state} prev
 */

export const Notify = {};

/**
 * @callback action
 * @param {state}
 * @returns
 *
 */

export const Action = {};

/**
 * @callback update
 * @param {action}
 */

/**
 * @callback subscribe
 * @param {Notify} notify
 */

/**
 * @callback EmptyFn
 */

/**
 * @typedef {object} Store
 * @prop {update} update
 * @prop {subscribe} subscribe
 */

const initialState = {
  value: 0,
};
/**
 * @type {Array<State>}
 */
const states = [initialState];

/**
 * @type {Array<Notify>}
 */
let notifiers = [];

/**
 *
 * @param {Action} action
 */
export const update = (action) => {
  if (typeof action !== "function") {
    throw new Error("action is required to be a function");
  }

  const prev = Object.freeze({ ...states[0] });
  const next = Object.freeze({ ...action(prev) });

  const handler = (notify) => notify(next, prev);

  notifiers.forEach(handler);

  states.unshift(next);
};

/**
 * @param {Notify} notify
 * @returns {}
 */
export const subscribe = (notify) => {
  notifiers.push(notify);

  const unsubscribe = () => {
    const handler = (current) => current !== notify;
    const result = notifiers.filter(handler);
    notifiers = result;
  };
  return unsubscribe;
};
