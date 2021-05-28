import { useStore } from "effector-react/ssr";
import { FC } from "react";
import { $posts } from "../models/post";

export const Posts: FC = () => {
  const posts = useStore($posts);
  return (
    <div>
      <h2>Posts</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};
