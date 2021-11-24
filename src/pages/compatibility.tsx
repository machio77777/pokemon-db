import Head from 'next/head'
import Layout from 'components/templates/layout'
import Ptypes from 'components/organisms/main/ptypes'

export default function Types() {
  return (
    <Layout>
      <Head>
        <title>タイプ相性表</title>
      </Head>
      <section>
        <Ptypes />
      </section>
    </Layout>
  )
}
