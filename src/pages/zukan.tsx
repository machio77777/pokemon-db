import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function Zukan() {
  return (
    <Layout>
      <Head>
        <title>ガラル図鑑ソードシールド</title>
      </Head>
      <section>
        <H1 heading={'ガラル図鑑ソードシールド'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
