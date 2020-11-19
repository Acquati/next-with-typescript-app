import { getSortedPostsData } from '../lib/posts'
import BlogLayout from '../components/BlogLayout'
import utilStyles from '../styles/utils.module.sass'

interface PostData {
  id: string,
  date: string,
  title: string
}

interface AllPostsData {
  allPostsData: {
    id: string,
    date: string,
    title: string
  }[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const IndexPage = ({ allPostsData }: AllPostsData) => (
  <BlogLayout siteTitle="Home | Next.js + TypeScript Example" home>
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }: PostData) => (
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  </BlogLayout>
)

export default IndexPage
