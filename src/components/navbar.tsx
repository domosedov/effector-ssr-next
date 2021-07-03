import type { FC } from 'react'
import Link from 'next/link'
import { Flex } from '@components/ui'

export const Navbar: FC = () => {
  return (
    <Flex as='nav' direction='column'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/todos'>
        <a>Todos</a>
      </Link>
    </Flex>
  )
}
