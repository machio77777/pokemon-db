import Head from 'next/head'
import Layout from 'components/templates/layout'
import Personal from 'components/organisms/main/personal'
import PersonalByRecommend from 'components/organisms/main/personalByRecommend'

export default function Personality() {
  return (
    <Layout>
      <Head>
        <title>性格補正表</title>
      </Head>
      <section>
        <Personal />
      </section>
      <section>
        <PersonalByRecommend />
      </section>
    </Layout>
  )
}
