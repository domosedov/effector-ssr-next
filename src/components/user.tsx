import { useStore } from "effector-react/ssr";
import { FC } from "react";
import { $user } from "../models/user";

export const User: FC = () => {
  const user = useStore($user);

  return (
    <div>
      <h2>Current user</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
