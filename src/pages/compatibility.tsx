import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'
import Ptypes from 'components/organisms/main/ptypes'

export default function Types() {
  return (
    <Layout>
      <Head>
        <title>タイプ相性表</title>
      </Head>
      <section>
        <H1 heading={'タイプ相性表'} />
        <Ptypes />
      </section>
    </Layout>
  )
}
