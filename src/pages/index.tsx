import type { FC } from 'react'
import type { GetServerSideProps } from 'next'

import { Counter } from '@components/counter'
import { Todos } from '@components/todos'
import { User } from '@components/user'
import { Box, Button } from '@components/ui'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialState: {},
    },
  }
}

export const HomePage: FC = () => {
  return (
    <Box css={{ px: '$10' }}>
      <Button css={{ fontWeight: '$light' }}>Click me</Button>
      <h1>Home Page</h1>
      <Counter />
      <Todos />
      <User />
    </Box>
  )
}

export default HomePage
