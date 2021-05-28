import { allSettled, fork, serialize } from "effector";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { Counter } from "../components/counter";
import { Todos } from "../components/todos";
import { User } from "../components/user";
import { fetchTodosAndPostsFx } from "../models/app";
import { root } from "../models/domain";

export const getServerSideProps: GetServerSideProps = async () => {
  const scope = fork(root);

  await allSettled(fetchTodosAndPostsFx, { scope });

  const serializedScope = serialize(scope, { onlyChanges: true });

  return {
    props: {
      initialState: serializedScope,
    },
  };
};

export const TodosPage: FC = () => {
  return (
    <div>
      <h1>Todos Page</h1>
      <Counter />
      <Todos />
      <User />
    </div>
  );
};

export default TodosPage;
