import { root } from "../domain";
import { Post } from "./types";

export const $posts = root.createStore<Post[]>([]);

export const fetchPostsFx = root.createEffect<void, Post[]>();
