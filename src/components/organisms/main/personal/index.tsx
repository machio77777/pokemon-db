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
    <table className={styles.table}>
      <tr className={styles.tableColor}>
        <th rowSpan={2} colSpan={2}>&nbsp;</th>
        <th style={{ letterSpacing: `3px` }} colSpan={6}>上がる能力</th>
      </tr>
      <tr className={styles.topheader}>
        <th>攻撃</th>
        <th>防御</th>
        <th>特攻</th>
        <th>特防</th>
        <th>素早さ</th>
      </tr>
      <tr>
        <th className={styles.tableColor} rowSpan={5} style={{ padding: `0 15px`}}>下<br/>が<br/>る<br/>能<br/>力</th>
        <td className={styles.sideheader}>攻撃</td>
        {drawPersonals(personals[0])}
      </tr>
      <tr>
        <td className={styles.sideheader}>防御</td>
        {drawPersonals(personals[1])}
      </tr>
      <tr>
        <td className={styles.sideheader}>特攻</td>
        {drawPersonals(personals[2])}
      </tr>
      <tr>
        <td className={styles.sideheader}>特防</td>
        {drawPersonals(personals[3])}
      </tr>
      <tr>
        <td className={styles.sideheader}>素早さ</td>
        {drawPersonals(personals[4])}
      </tr>
    </table>
  )
}

const drawPersonals = (personals: string[]) => {
  return (
    personals.map((personal, index) => {
      return (
        <td key={index}>{personal}</td>
      )
    })
  )
}

export default Personal