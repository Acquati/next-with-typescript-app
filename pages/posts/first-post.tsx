import Link from 'next/link'
import BlogLayout from '../../components/BlogLayout'
import utilStyles from '../../styles/utils.module.sass'

const FirstPost = () => (
  <BlogLayout siteTitle="First Post | Next.js + TypeScript Example">
    <h1>First Post</h1>
    <h2 className={utilStyles.title}>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </BlogLayout>
)

export default FirstPost
