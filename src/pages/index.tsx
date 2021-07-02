import type { FC } from 'react'
import type { GetServerSideProps } from 'next'

import { Counter } from '@components/counter'
import { Todos } from '@components/todos'
import { User } from '@components/user'
import { Button } from '@components/ui/button'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialState: {},
    },
  }
}

export const HomePage: FC = () => {
  return (
    <div>
      <Button>Click me</Button>
      <h1>Home Page</h1>
      <Counter />
      <Todos />
      <User />
    </div>
  )
}

export default HomePage
