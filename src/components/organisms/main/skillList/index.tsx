import styles from './skillList.module.css'

interface Props {
  rows: {
    name: string,
    type: string,
    classifying: string,
    power: number | string,
    dai: number | string,
    hit: number | string,
    pp: number,
    direct: number,
    defence: number,
    target: string,
    lecture: string
  }[]
}

const SkillList = (props: Props) => {

  return (
    <table className={styles.table}>
      <tr>
        <th className={styles.name}>名前</th>
        <th className={styles.type}>タイプ</th>
        <th className={styles.classifying}>分類</th>
        <th className={styles.power}>威力</th>
        <th className={styles.dai}>ダイ</th>
        <th className={styles.hit}>命中</th>
        <th className={styles.pp}>PP</th>
        <th className={styles.direct}>直</th>
        <th className={styles.defence}>守</th>
      </tr>
      <tr>
        <th>対象</th>
        <th colSpan={8}>説明</th>
      </tr>
      {props.rows.map((row, index) => {
        return (
          <>
            <tr key={index} style={{ borderTop: `solid 3px #69c` }}>
              <td>{row.name}</td>
              <td className={styles.skillType}>{drawType(row.type)}</td>
              <td>{row.classifying}</td>
              <td>{row.power}</td>
              <td>{row.dai}</td>
              <td>{row.hit}</td>
              <td>{row.pp}</td>
              <td>{drawDirect(row.direct)}</td>
              <td>{drawDefence(row.defence)}</td>
            </tr>
            <tr key={index}>
              <td>{row.target}</td>
              <td colSpan={8} style={{ textAlign: `left` }}>{row.lecture}</td>
            </tr>
          </>
        )
      })}
    </table>
  )
}

const drawType = (type: string) => {
  const types = {
    'ノーマル' : 'normal',
    'ほのお' : 'flame',
    'みず' : 'water',
    'でんき' : 'electricity',
    'くさ' : 'grass',
    'こおり' : 'ice',
    'かくとう' : 'fighting',
    'どく' : 'poison',
    'じめん' : 'ground',
    'ひこう' : 'flying',
    'エスパー' : 'esper',
    'むし' : 'insect',
    'いわ' : 'rock',
    'ゴースト' : 'ghost',
    'ドラゴン' : 'dragon',
    'あく' : 'evil',
    'はがね' : 'steel',
    'フェアリー' : 'fairy'
  }
  return <span className={types[type]}>{type}</span>
}

const drawDirect = (direct: number) => {
  if (direct === 0) {
    return <span>直○</span>
  } else {
    return <span>直×</span>
  }
}

const drawDefence = (defence: number) => {
  if (defence === 0) {
    return <span>守○</span>
  } else {
    return <span>守×</span>
  }
}

export default SkillList