import { createEffect, createStore } from "effector-root";
import { Post } from "./types";

export const $posts = createStore<Post[]>([]);

export const fetchPostsFx = createEffect<void, Post[]>();
