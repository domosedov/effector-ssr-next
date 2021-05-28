import { root } from "../domain";
import { User } from "./types";

export const $user = root.createStore<User | null>(null);

export const fetchUserByIdFx = root.createEffect<User["id"], User>();
