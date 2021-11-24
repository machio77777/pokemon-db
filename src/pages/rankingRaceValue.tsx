import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'

export default function RankingRaceValue() {
  return (
    <Layout>
      <Head>
        <title>種族値ランキング</title>
      </Head>
      <section>
        <H1 heading={'種族値ランキング'} />
        <p>（準備中）</p>
      </section>
    </Layout>
  )
}
