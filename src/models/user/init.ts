import { sample } from "effector";
import { $user, fetchUserByIdFx } from ".";
import { fetchTodosFx } from "../todo";

fetchUserByIdFx.use(async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.json();
});

$user.on(fetchUserByIdFx.doneData, (_, user) => user);

sample({
  clock: fetchTodosFx.doneData,
  fn: (todos) => todos[0].userId,
  target: fetchUserByIdFx,
});
