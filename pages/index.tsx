import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'
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

export const getStaticProps: GetStaticProps = async () => {
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
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </BlogLayout>
)

export default IndexPage
