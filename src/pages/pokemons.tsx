import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function Pokemons() {
  return (
    <Layout>
      <Head>
        <title>ガラル地方のポケモン一覧</title>
      </Head>
      <section>
        <H1 heading={'ガラル地方のポケモン一覧'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
