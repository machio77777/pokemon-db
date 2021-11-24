import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'
import Personal from 'components/organisms/main/personal'
import PersonalByNuts from 'components/organisms/main/personalByNuts'
import PersonalByRecommend from 'components/organisms/main/personalByRecommend'

export default function Personality() {
  return (
    <Layout>
      <Head>
        <title>性格補正表</title>
      </Head>
      <section>
        <H1 heading={'性格補正表'} />
        <p>性格別の上がる能力、下がる能力は次のとおり。</p>
        <Personal />
      </section>
      <section>
        <PersonalByRecommend />
      </section>
      <section>
        <PersonalByNuts />
      </section>
    </Layout>
  )
}
