import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import BlogLayout from '../../components/BlogLayout'
import utilStyles from '../../styles/utils.module.sass'

interface Params {
  params: {
    id: string
  }
}

interface PostData {
  postData: {
    id: string,
    date: string,
    title: string,
    contentHtml: string
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: Params) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }: PostData) => (
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

export default Post
