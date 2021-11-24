import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function Mybox() {
  return (
    <Layout>
      <Head>
        <title>ボックス管理</title>
      </Head>
      <section>
        <H1 heading={'ボックス管理'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
