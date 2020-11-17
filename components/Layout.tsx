import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import styles from './Layout.module.sass'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <div className={styles.container}>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
