import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import BlogLayout from '../../components/BlogLayout'
import utilStyles from '../../styles/utils.module.sass'

interface PostData {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }: PostData) {
  return (
    <BlogLayout siteTitle={postData.title + ' | Next.js + TypeScript Example'}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </BlogLayout>
  )
}
