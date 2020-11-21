import Layout from './Layout'
import styles from './PageLayout.module.sass'

type Props = {
  children: React.ReactNode
  siteTitle?: string
}

const PageLayout = ({ children, siteTitle = 'Next.js + TypeScript Example' }: Props) => (
  <Layout siteTitle={siteTitle}>
    <div className={styles.container}>
      {children}
    </div>
  </Layout>
)

export default PageLayout
