import type { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { allSettled, fork, serialize, root } from 'effector-root'

import { Counter } from '../components/counter'
import { Todos } from '../components/todos'
import { User } from '../components/user'
import { fetchPostsFx } from '../models/post'
import { fetchTodosFx } from '../models/todo'
import { INITIAL_STATE_KEY } from '../configs/constants'

export const getServerSideProps: GetServerSideProps = async () => {
  const scope = fork(root)

  await allSettled(fetchTodosFx, { scope })
  await allSettled(fetchPostsFx, { scope })

  const serializedScope = serialize(scope, { onlyChanges: true })

  return {
    props: {
      [INITIAL_STATE_KEY]: serializedScope,
    },
  }
}

export const TodosPage: FC = () => {
  return (
    <div>
      <h1>Todos Page</h1>
      <Counter />
      <Todos />
      <User />
    </div>
  )
}

export default TodosPage
