import { createEvent, createStore } from "effector-root";

export const $count = createStore(0);
export const inc = createEvent();
export const dec = createEvent();
