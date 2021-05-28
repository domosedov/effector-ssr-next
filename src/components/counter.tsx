import { useEvent, useStore } from "effector-react/ssr";
import { FC } from "react";
import { $count, dec, inc } from "../models/counter";

export const Counter: FC = () => {
  const count = useStore($count);
  const increment = useEvent(inc);
  const decrement = useEvent(dec);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment as VoidFunction}>+</button>
      <button onClick={decrement as VoidFunction}>-</button>
    </div>
  );
};
