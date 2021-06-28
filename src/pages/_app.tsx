import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'effector-react/ssr'
import { root } from 'effector-root'

import '../models/init.ts'
import { Navbar } from '../components/navbar'
import { Posts } from '../components/posts'
import { useScope } from '../models/use-scope'
import { INITIAL_STATE_KEY } from '../configs/constants'

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  const scope = useScope(root, pageProps[INITIAL_STATE_KEY])

  return (
    <Provider value={scope}>
      <Navbar />
      <Posts />
      <Component {...pageProps} />
    </Provider>
  )
}

export default Application
