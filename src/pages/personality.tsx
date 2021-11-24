import Head from 'next/head'
import Layout from 'components/templates/layout'
import Personal from 'components/organisms/main/personal'

export default function Personality() {
  return (
    <Layout>
      <Head>
        <title>性格補正表</title>
      </Head>
      <section>
        <Personal />
      </section>
    </Layout>
  )
}
