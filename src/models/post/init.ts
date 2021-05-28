import { $posts, fetchPostsFx } from ".";

fetchPostsFx.use(async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=2"
  );
  return response.json();
});

$posts.on(fetchPostsFx.doneData, (_, posts) => posts);
