import React from 'react'
import Link from 'next/link'
import styles from './Header.module.sass'

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
        |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
        |{' '}
      <Link href="/users">
        <a>Users List</a>
      </Link>{' '}
        | <a href="/api/users">Users API</a>
    </nav>
  </header>
)

export default Header
