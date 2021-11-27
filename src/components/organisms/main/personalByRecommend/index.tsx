import styles from './personalByRecommend.module.css'

const PersonalByRecommend = () => {

  return (
    <>
      <p>特によく採用される戦略・性格に★マークを表記。</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableColor}>
            <th>分類</th>
            <th>戦略</th>
            <th>おすすめの性格</th>
            <th>上がる</th>
            <th>下がる</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={5} style={{ backgroundColor: `#fee` }}>「攻撃」が高い<br/>↓<br/>物理型</th>
            <td style={{ backgroundColor: `#fee` }}>★火力重視</td>
            <td className={styles.emphasis}>いじっぱり</td>
            <td>攻撃</td>
            <td>特攻</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#fee` }}>★素早さを活かす</td>
            <td className={styles.emphasis}>ようき</td>
            <td>素早</td>
            <td>特攻</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#fee` }}>トリックルーム</td>
            <td>ゆうかん</td>
            <td>攻撃</td>
            <td>素早</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#fee` }}>防御の耐久型</td>
            <td>わんぱく</td>
            <td>防御</td>
            <td>特攻</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#fee` }}>特防の耐久型</td>
            <td>しんちょう</td>
            <td>特防</td>
            <td>特攻</td>
          </tr>
          <tr>
            <th rowSpan={5} style={{ backgroundColor: `#def` }}>「特攻」が高い<br/>↓<br/>特殊型</th>
            <td style={{ backgroundColor: `#def` }}>★火力重視</td>
            <td className={styles.emphasis}>ひかえめ</td>
            <td>特攻</td>
            <td>攻撃</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#def` }}>★素早さを活かす</td>
            <td className={styles.emphasis}>おくびょう</td>
            <td>素早</td>
            <td>攻撃</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#def` }}>トリックルーム</td>
            <td>れいせい</td>
            <td>特攻</td>
            <td>素早</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#def` }}>防御の耐久型</td>
            <td>ずぶとい</td>
            <td>防御</td>
            <td>攻撃</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#def` }}>特防の耐久型</td>
            <td>おだやか</td>
            <td>特防</td>
            <td>攻撃</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `#eee` }}>両刀タイプ<br/>物理技・特殊技</td>
            <td colSpan={4}>上級者向け。<br/>防御・特防のどちらかを下げるのが一般的。<br/>トリックルーム戦略の場合は素早さを下げる。</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PersonalByRecommend