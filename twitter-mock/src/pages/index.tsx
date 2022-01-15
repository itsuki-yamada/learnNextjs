import type { NextPage } from 'next'
import { Layout } from "../components/layout/layout";
import { TweetInput } from "../components/form/TweetInput";

const pageName = 'HOME';
const IndexPage: NextPage = () => {
  return (
    <Layout pageName={pageName}>
      <TweetInput/>
    </Layout>
  )
}

export default IndexPage
