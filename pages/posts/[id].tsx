import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'
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
    title: string
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
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }: PostData) => (
  <BlogLayout siteTitle={' | Next.js + TypeScript Example'}>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
  </BlogLayout>
)

export default Post
