import styles from './personalByNuts.module.css'

const PersonalByNuts = () => {

  return (
    <>
      <p>嫌いな味のきのみを食べた場合は「こんらん」状態になってしまう。</p>
      <table className={styles.table}>
        <tr className={styles.tableColor}>
          <th>きのみ</th>
          <th>味</th>
          <th colSpan={4}>嫌いな性格</th>
        </tr>
        <tr>
          <th style={{ backgroundColor: `#def` }}>フィラのみ</th>
          <td style={{ backgroundColor: `#fee` }}>からい</td>
          <td>ずぶとい</td>
          <td>ひかえめ</td>
          <td>おだやか</td>
          <td>おくびょう</td>
        </tr>
        <tr>
          <th style={{ backgroundColor: `#def` }}>ウイのみ</th>
          <td style={{ backgroundColor: `#fee` }}>しぶい</td>
          <td>いじっぱり</td>
          <td>わんぱく</td>
          <td>しんちょう</td>
          <td>ようき</td>
        </tr>
        <tr>
          <th style={{ backgroundColor: `#def` }}>マゴのみ</th>
          <td style={{ backgroundColor: `#fee` }}>あまい</td>
          <td>ゆうかん</td>
          <td>のんき</td>
          <td>れいせい</td>
          <td>なまいき</td>
        </tr>
        <tr>
          <th style={{ backgroundColor: `#def` }}>バンジのみ</th>
          <td style={{ backgroundColor: `#fee` }}>にがい</td>
          <td>やんちゃ</td>
          <td>のうてんき</td>
          <td>うっかりや</td>
          <td>むじゃき</td>
        </tr>
        <tr>
          <th style={{ backgroundColor: `#def` }}>イアのみ</th>
          <td style={{ backgroundColor: `#fee` }}>すっぱい</td>
          <td>さみしがりや</td>
          <td>おっとり</td>
          <td>おとなしい</td>
          <td>せっかち</td>
        </tr>
      </table>
    </>
  )
}

export default PersonalByNuts