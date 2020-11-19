import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import utilStyles from '../styles/utils.module.sass'

const AboutPage = () => (
  <PageLayout siteTitle="About | Next.js + TypeScript Example">
    <h1 className={utilStyles.title}>
      Read <Link href="/blog/posts/first-post"><a>this page!</a></Link>
    </h1>

    <p className={utilStyles.description}>
      Get started by editing <code>pages/index.js</code>
    </p>

    <div className={utilStyles.grid}>
      <a
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className={utilStyles.card}
      >
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a
        href="https://nextjs.org/learn"
        target="_blank"
        rel="noopener noreferrer"
        className={utilStyles.card}
      >
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        target="_blank"
        rel="noopener noreferrer"
        className={utilStyles.card}
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={utilStyles.card}
      >
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </div>
  </PageLayout>
)

export default AboutPage
