import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function CalcureteStatus() {
  return (
    <Layout>
      <Head>
        <title>ステータス計算</title>
      </Head>
      <section>
        <H1 heading={'ステータス計算'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
