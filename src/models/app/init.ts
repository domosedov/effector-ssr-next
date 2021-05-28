import { fetchTodosAndPostsFx } from ".";
import { fetchPostsFx } from "../post";
import { fetchTodosFx } from "../todo";

fetchTodosAndPostsFx.use(async () => {
  await fetchTodosFx();
  await fetchPostsFx();
});
