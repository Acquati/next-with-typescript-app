import Link from 'next/link'
import Layout from '../../../components/Layout'
import styles from '../styles.module.sass'

const FirstPost = () => (
  <Layout title="First Post | Next.js + TypeScript Example">
    <main className={styles.main}>
      <h1>First Post</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </main>
  </Layout>
)

export default FirstPost
