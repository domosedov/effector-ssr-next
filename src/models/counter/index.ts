import { root } from "../domain";

export const $count = root.createStore(0);
export const inc = root.createEvent();
export const dec = root.createEvent();
