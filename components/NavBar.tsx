import Link from 'next/link'
import styles from './NavBar.module.sass'

const NavBar = () => (
  <div className={styles.navBar}>
    <div className={styles.container}>
      <nav>
        <div className={styles.links}>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/next-js-logo.svg" alt="Next JS Site" className={styles.logo} />
          </a>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/users">
            <a>Users List</a>
          </Link>
          <a href="/api/users">Users API</a>
        </div>
      </nav>
    </div>
  </div>
)

export default NavBar
