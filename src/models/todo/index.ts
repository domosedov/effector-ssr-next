import { createEffect, createStore } from "effector-root";
import isEqual from "react-fast-compare";

import { Todo } from "./types";

export const $todos = createStore<Todo[]>([], {
  updateFilter: (next, prev) => !isEqual(prev, next),
});
export const fetchTodosFx = createEffect<void, Todo[]>();
