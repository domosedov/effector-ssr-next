import isEqual from "react-fast-compare";

import { root } from "../domain";
import { Todo } from "./types";

export const $todos = root.createStore<Todo[]>([], {
  updateFilter: (next, prev) => !isEqual(prev, next),
});
export const fetchTodosFx = root.createEffect<void, Todo[]>();
