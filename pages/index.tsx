import BlogLayout from '../components/BlogLayout'
import utilStyles from '../styles/utils.module.sass'

const IndexPage = () => (
  <BlogLayout siteTitle="Home | Next.js + TypeScript Example" home>
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
  </BlogLayout>
)

export default IndexPage
