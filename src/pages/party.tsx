import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function Party() {
  return (
    <Layout>
      <Head>
        <title>パーティー考察</title>
      </Head>
      <section>
        <H1 heading={'パーティー考察'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
