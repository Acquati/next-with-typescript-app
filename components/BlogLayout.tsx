import Link from 'next/link'
import Layout from './Layout'
import styles from './BlogLayout.module.sass'
import utilStyles from '../styles/utils.module.sass'

type Props = {
  children: React.ReactNode
  siteTitle?: string
  home?: boolean
}

const name = '[Your Name]'

const BlogLayout = ({ children, siteTitle = 'Next.js + TypeScript Example', home }: Props) => (
  <Layout siteTitle={siteTitle}>
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>↩ Back to home</a>
          </Link>
        </div>
      )}
    </div>
  </Layout>
)

export default BlogLayout
