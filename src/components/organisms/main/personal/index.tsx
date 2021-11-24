import styles from './personal.module.css'

const Personal = () => {
  const personals = [
    ['-', 'ずぶとい', 'ひかえめ', 'おだやか', 'おくびょう'],
    ['さみしがりや', '-', 'おっとり', 'おとなしい', 'せっかち'],
    ['いじっぱり', 'わんぱく', '-', 'しんちょう', 'ようき'],
    ['やんちゃ', 'のうてんき', 'うっかりや', '-', 'むじゃき'],
    ['ゆうかん', 'のんき', 'れいせい', 'なまいき', '-']
  ]
  return (
    <>
      <table className={styles.table}>
        <tr className={styles.tableColor}>
          <th rowSpan={2} colSpan={2}>&nbsp;</th>
          <th style={{ letterSpacing: `3px` }} colSpan={6}>上がる能力</th>
        </tr>
        <tr style={{ background: `#ff8e8e`, color: `#ffffff` }}>
          <th>攻撃</th>
          <th>防御</th>
          <th>特攻</th>
          <th>特防</th>
          <th style={{ padding: `0 13px` }}>素早さ</th>
        </tr>
        <tr>
          <th className={styles.tableColor} rowSpan={5}>下<br/>が<br/>る<br/>能<br/>力</th>
          <td style={{ background: `#8cb3cb`, color: `#ffffff`}}>攻撃</td>
          {personals[0].map((personal, index) => {
            return (
              <td key={index}>{personal}</td>
            )
          })}
        </tr>
        <tr>
          <td style={{ background: `#8cb3cb`, color: `#ffffff`}}>防御</td>
          {personals[1].map((personal, index) => {
            return (
              <td key={index}>{personal}</td>
            )
          })}
        </tr>
        <tr>
          <td style={{ background: `#8cb3cb`, color: `#ffffff`}}>特攻</td>
          {personals[2].map((personal, index) => {
            return (
              <td key={index}>{personal}</td>
            )
          })}
        </tr>
        <tr>
          <td style={{ background: `#8cb3cb`, color: `#ffffff`}}>特防</td>
          {personals[3].map((personal, index) => {
            return (
              <td key={index}>{personal}</td>
            )
          })}
        </tr>
        <tr>
          <td style={{ background: `#8cb3cb`, color: `#ffffff`}}>素早さ</td>
          {personals[4].map((personal, index) => {
            return (
              <td key={index}>{personal}</td>
            )
          })}
        </tr>
      </table>
    </>
  )
}

const changePersonal = (type: number | string) => {
  if (type === 1) {
    return <span className={styles.up}>○</span>
  } else if (type === 2) {
    return <span className={styles.down}>✖︎</span>
  } else {
    return <span>&nbsp;</span>
  }
}

export default Personal