import Head from 'next/head'
import Layout from 'components/templates/layout'
import H1 from 'components/atoms/h1'
import SkillList from 'components/organisms/main/skillList'

export default function Skills() {
  const rows = [
    { name: 'アームハンマー', type: 'かくとう', classifying: '物理', power: 100, dai: 90, hit: 90, pp: 10, direct: 0, defence: 0, target: '1体選択', lecture: '攻撃後、自分の『すばやさ』ランクが1段階下がる。特性『てつのこぶし』の時、威力が1.2倍になる。' },
    { name: 'アイアンテール', type: 'はがね', classifying: '物理', power: 100, dai: 130, hit: 75, pp: 15, direct: 0, defence: 0, target: '1体選択', lecture: '30%の確率で相手の『ぼうぎょ』ランクを1段階下げる。' },
    { name: 'アイアンヘッド', type: 'はがね', classifying: '物理', power: 80, dai: 130, hit: 100, pp: 15, direct: 0, defence: 0, target: '1体選択', lecture: '30%の確率で相手をひるませる。' },
    { name: 'アイアンローラー', type: 'はがね', classifying: '物理', power: 130, dai: 140, hit: 100, pp: 5, direct: 0, defence: 0, target: '1体選択', lecture: '30%場の状態『グラスフィールド』『ミストフィールド』『エレキフィールド』『サイコフィールド』を解除し、元に戻す。いずれの状態でもない時は技が失敗する。' },
    { name: 'あかいほのお', type: 'ほのお', classifying: '特殊', power: 130, dai: 140, hit: 85, pp: 5, direct: 0, defence: 0, target: '1体選択', lecture: '20%の確率で相手を『やけど』状態にする。' },
    { name: 'アクアジェット', type: 'みず', classifying: '物理', power: 40, dai: 90, hit: 100, pp: 20, direct: 0, defence: 0, target: '1体選択', lecture: '必ず先制できる(優先度:+1)。' },
    { name: 'アクアテール', type: 'みず', classifying: '物理', power: 90, dai: 130, hit: 90, pp: 10, direct: 0, defence: 0, target: '1体選択', lecture: '通常攻撃' },
    { name: 'アクアブレイク', type: 'みず', classifying: '物理', power: 85, dai: 130, hit: 100, pp: 10, direct: 0, defence: 0, target: '1体選択', lecture: '20%の確率で、相手の『ぼうぎょ』ランクを1段階下げる。' },
    { name: 'アクアリング', type: 'みず', classifying: '変化', power: '-', dai: '-', hit: '-', pp: 20, direct: 1, defence: 1, target: '自分', lecture: '使用後、毎ターン、HPが最大HPの1/16ずつ回復する。' },
    { name: 'あくうせつだん', type: 'ドラゴン', classifying: '特殊', power: 100, dai: 130, hit: 95, pp: 5, direct: 1, defence: 0, target: '1体選択', lecture: '所に当たりやすい(急所ランク:+1)。' },
    { name: 'アクセルロック', type: 'いわ', classifying: '物理', power: 40, dai: 90, hit: 100, pp: 20, direct: 0, defence: 0, target: '1体選択', lecture: '必ず先制できる(優先度:+1)。' },
    { name: 'あくのはどう', type: 'あく', classifying: '特殊', power: 80, dai: 130, hit: 100, pp: 15, direct: 1, defence: 0, target: '1体選択', lecture: '20%の確率で相手をひるませる。' },
    { name: 'ひっかく', type: 'ノーマル', classifying: '物理', power: 40, dai: 90, hit: 100, pp: 35, direct: 0, defence: 0, target: '1体選択', lecture: '通常攻撃' },
  ]
  return (
    <Layout>
      <Head>
        <title>すべての技リスト</title>
      </Head>
      <section>
        <H1 heading={'すべての技リスト'} />
        <SkillList rows={rows} />
      </section>
    </Layout>
  )
}
