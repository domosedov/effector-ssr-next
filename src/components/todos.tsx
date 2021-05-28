import { useEvent, useStore } from "effector-react/ssr";
import { FC } from "react";
import { $todos, fetchTodosFx } from "../models/todo";

export const Todos: FC = () => {
  const todos = useStore($todos);
  const fetchTodos = useEvent(fetchTodosFx);
  return (
    <div>
      <h2>Todos</h2>
      {Math.random()}
      <button onClick={fetchTodos as VoidFunction}>Fetch Todos</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};
