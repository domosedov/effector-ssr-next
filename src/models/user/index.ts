import { createEffect, createStore } from "effector-root";
import { User } from "./types";

export const $user = createStore<User | null>(null);

export const fetchUserByIdFx = createEffect<User["id"], User>();
