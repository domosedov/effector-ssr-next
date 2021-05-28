import { $todos, fetchTodosFx } from ".";

fetchTodosFx.use(async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );
  return response.json();
});

$todos.on(fetchTodosFx.doneData, (_, todos) => todos);
