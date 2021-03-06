import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces/User'
import { sampleUserData } from '../../utils/sample-data'
import PageLayout from '../../components/PageLayout'
import List from '../../components/List'

const WithStaticProps = ({ items }: { items: User[] }) => (
  <PageLayout siteTitle="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>↩ Back to home</a>
      </Link>
    </p>
  </PageLayout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
