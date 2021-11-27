import { TYPE_KEY, TYPE_NAME_OMIT } from 'utils/commonType'
import styles from './ptypes.module.css'

const Ptypes = () => {
  const types = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 2, 0], // ノーマル
    [0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0], // 炎
    [0, 1, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0], // 水
    [0, 0, 1, 2, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 2, 0, 0, 0], // 電
    [0, 2, 1, 0, 2, 0, 0, 2, 1, 2, 0, 2, 1, 0, 2, 0, 0, 0], // 草
    [0, 2, 2, 0, 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 2, 0], // 氷
    [1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 2, 2, 1, 3, 0, 1, 1, 2], // 格
    [0, 0, 0, 0, 1, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 3, 1], // 毒
    [0, 1, 0, 1, 2, 0, 0, 1, 0, 3, 0, 2, 1, 0, 0, 0, 1, 0], // 地
    [0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, 0], // 飛
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 3, 2, 0], // 超
    [0, 2, 0, 0, 1, 0, 2, 2, 0, 2, 1, 0, 0, 2, 0, 1, 2, 2], // 虫
    [0, 1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 1, 0, 0, 0, 0, 2, 0], // 岩
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0], // 霊
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3], // 竜
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 2], // 悪
    [0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1], // 鋼
    [0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0], // 妖
  ]
  return (
    <>
      <p>ダイパリメイク、ソードアンドシールド、サンムーン、XY/ORAS、および、ポケモンGOにおけるタイプ相性表。</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableColor}>
            <th colSpan={2} rowSpan={2}>&nbsp;</th>
            <th colSpan={18} className={styles.dTypes}>防御する側のポケモンのタイプ</th>
          </tr>
          <tr>
            <td className={TYPE_KEY.NORMAL}>{TYPE_NAME_OMIT.NORMAL}</td>
            <td className={TYPE_KEY.FLAME}>{TYPE_NAME_OMIT.FLAME}</td>
            <td className={TYPE_KEY.WATER}>{TYPE_NAME_OMIT.WATER}</td>
            <td className={TYPE_KEY.ELECTRICITY}>{TYPE_NAME_OMIT.ELECTRICITY}</td>
            <td className={TYPE_KEY.GRASS}>{TYPE_NAME_OMIT.GRASS}</td>
            <td className={TYPE_KEY.ICE}>{TYPE_NAME_OMIT.ICE}</td>
            <td className={TYPE_KEY.FIGHTING}>{TYPE_NAME_OMIT.FLYING}</td>
            <td className={TYPE_KEY.POISON}>{TYPE_NAME_OMIT.POISON}</td>
            <td className={TYPE_KEY.GROUND}>{TYPE_NAME_OMIT.GROUND}</td>
            <td className={TYPE_KEY.FLYING}>{TYPE_NAME_OMIT.FLYING}</td>
            <td className={TYPE_KEY.ESPER}>{TYPE_NAME_OMIT.ESPER}</td>
            <td className={TYPE_KEY.INSECT}>{TYPE_NAME_OMIT.INSECT}</td>
            <td className={TYPE_KEY.ROCK}>{TYPE_NAME_OMIT.ROCK}</td>
            <td className={TYPE_KEY.GHOST}>{TYPE_NAME_OMIT.GHOST}</td>
            <td className={TYPE_KEY.DRAGON}>{TYPE_NAME_OMIT.DRAGON}</td>
            <td className={TYPE_KEY.EVIL}>{TYPE_NAME_OMIT.EVIL}</td>
            <td className={TYPE_KEY.STEEL}>{TYPE_NAME_OMIT.STEEL}</td>
            <td className={TYPE_KEY.FAIRY}>{TYPE_NAME_OMIT.FAIRY}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={18} className={styles.aTypes}>攻<br/>撃<br/>す<br/>る<br/>側<br/>の<br/>ポ<br/>ケ<br/>モ<br/>ン<br/>の<br/>タ<br/>イ<br/>プ</th>
            <td className={TYPE_KEY.NORMAL}>{TYPE_NAME_OMIT.NORMAL}</td>
            {drawTypes(types[0])}
          </tr>
          <tr>
            <td className={TYPE_KEY.FLAME}>{TYPE_NAME_OMIT.FLAME}</td>
            {drawTypes(types[1])}
          </tr>
          <tr>
            <td className={TYPE_KEY.WATER}>{TYPE_NAME_OMIT.WATER}</td>
            {drawTypes(types[2])}
          </tr>
          <tr>
            <td className={TYPE_KEY.ELECTRICITY}>{TYPE_NAME_OMIT.ELECTRICITY}</td>
            {drawTypes(types[3])}
          </tr>
          <tr>
            <td className={TYPE_KEY.GRASS}>{TYPE_NAME_OMIT.GRASS}</td>
            {drawTypes(types[4])}
          </tr>
          <tr>
            <td className={TYPE_KEY.ICE}>{TYPE_NAME_OMIT.ICE}</td>
            {drawTypes(types[5])}
          </tr>
          <tr>
            <td className={TYPE_KEY.FIGHTING}>{TYPE_NAME_OMIT.FIGHTING}</td>
            {drawTypes(types[6])}
          </tr>
          <tr>
            <td className={TYPE_KEY.POISON}>{TYPE_NAME_OMIT.POISON}</td>
            {drawTypes(types[7])}
          </tr>
          <tr>
            <td className={TYPE_KEY.GROUND}>{TYPE_NAME_OMIT.GROUND}</td>
            {drawTypes(types[8])}
          </tr>
          <tr>
            <td className={TYPE_KEY.FLYING}>{TYPE_NAME_OMIT.FLYING}</td>
            {drawTypes(types[9])}
          </tr>
          <tr>
            <td className={TYPE_KEY.ESPER}>{TYPE_NAME_OMIT.ESPER}</td>
            {drawTypes(types[10])}
          </tr>
          <tr>
            <td className={TYPE_KEY.INSECT}>{TYPE_NAME_OMIT.INSECT}</td>
            {drawTypes(types[11])}
          </tr>
          <tr>
            <td className={TYPE_KEY.ROCK}>{TYPE_NAME_OMIT.ROCK}</td>
            {drawTypes(types[12])}
          </tr>
          <tr>
            <td className={TYPE_KEY.GHOST}>{TYPE_NAME_OMIT.GHOST}</td>
            {drawTypes(types[13])}
          </tr>
          <tr>
            <td className={TYPE_KEY.DRAGON}>{TYPE_NAME_OMIT.DRAGON}</td>
            {drawTypes(types[14])}
          </tr>
          <tr>
            <td className={TYPE_KEY.EVIL}>{TYPE_NAME_OMIT.EVIL}</td>
            {drawTypes(types[15])}
          </tr>
          <tr>
            <td className={TYPE_KEY.STEEL}>{TYPE_NAME_OMIT.STEEL}</td>
            {drawTypes(types[16])}
          </tr>
          <tr>
            <td className={TYPE_KEY.FAIRY}>{TYPE_NAME_OMIT.FAIRY}</td>
            {drawTypes(types[17])}
          </tr>
          <tr>
            <th colSpan={20} className={styles.lecture}>
              <span className={styles.type1}>●</span>：2倍
              <span>無印：1倍</span>
              <span className={styles.type2}>▲</span>：0.5倍
              <span className={styles.type3}>✖︎</span>：0倍
            </th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const changeType = (type: number) => {
  if (type === 1) {
    return <span className={styles.type1}>●</span>
  } else if (type === 2) {
    return <span className={styles.type2}>▲</span>
  } else if (type === 3) {
    return <span className={styles.type3}>✖︎</span>
  } else {
    return <span>&nbsp;</span>
  }
}

const drawTypes = (types: number[]) => {
  return (
    types.map((type, index) => {
      return (
        <td key={index}>{changeType(type)}</td>
      )
    })
  )
}

export default Ptypes