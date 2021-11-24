import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function Characters() {
  return (
    <Layout>
      <Head>
        <title>すべての特性リスト</title>
      </Head>
      <section>
        <H1 heading={'すべての特性リスト'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
