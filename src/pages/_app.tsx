import { AppProps } from "next/app";
import { Provider } from "effector-react/ssr";

import { Navbar } from "../components/navbar";
import "../models/init.ts";
import { fork, Scope, serialize } from "effector";
import { root } from "../models/domain";
import { Posts } from "../components/posts";

let clientScope: Scope;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scope = fork(root, {
    values: {
      ...(clientScope ? serialize(clientScope, { onlyChanges: true }) : {}),
      ...pageProps.initialState,
    },
  });

  if (typeof window !== "undefined") clientScope = scope;

  return (
    <Provider value={scope}>
      <Navbar />
      <Posts />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
