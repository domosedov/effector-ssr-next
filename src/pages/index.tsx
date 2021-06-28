import { GetServerSideProps } from "next";
import { FC } from "react";
import { Counter } from "../components/counter";
import { Todos } from "../components/todos";
import { User } from "../components/user";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialState: {},
    },
  };
};

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
      <Todos />
      <User />
    </div>
  );
};

export default HomePage;
