import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  siteTitle?: string
  home?: boolean
}

const Layout = ({ children, siteTitle = 'Next.js + TypeScript Example' }: Props) => (
  <div>
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <NavBar />
    {children}
    <Footer />
  </div>
)

export default Layout
