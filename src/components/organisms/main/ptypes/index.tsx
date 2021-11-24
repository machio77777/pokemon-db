import styles from './ptypes.module.css'

const Ptypes = () => {
  const types = {
    'normal'     : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 2, 0], // ノーマル
    'flame'      : [0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0], // 炎
    'water'      : [0, 1, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0], // 水
    'electricity': [0, 0, 1, 2, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 2, 0, 0, 0], // 電
    'grass'      : [0, 2, 1, 0, 2, 0, 0, 2, 1, 2, 0, 2, 1, 0, 2, 0, 0, 0], // 草
    'ice'        : [0, 2, 2, 0, 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 2, 0], // 氷
    'fighting'   : [1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 2, 2, 1, 3, 0, 1, 1, 2], // 格
    'poison'     : [0, 0, 0, 0, 1, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 3, 1], // 毒
    'ground'     : [0, 1, 0, 1, 2, 0, 0, 1, 0, 3, 0, 2, 1, 0, 0, 0, 1, 0], // 地
    'flying'     : [0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, 0], // 飛
    'esper'      : [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 3, 2, 0], // 超
    'insect'     : [0, 2, 0, 0, 1, 0, 2, 2, 0, 2, 1, 0, 0, 2, 0, 1, 2, 2], // 虫
    'rock'       : [0, 1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 1, 0, 0, 0, 0, 2, 0], // 岩
    'ghost'      : [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0], // 霊
    'dragon'     : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3], // 竜
    'evil'       : [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 2], // 悪
    'steel'      : [0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1], // 鋼
    'fairy'      : [0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0], // 妖
  }
  return (
    <>
      <table className={styles.table}>
        <tr className={styles.tableColor}>
          <th colSpan={2} rowSpan={2}>&nbsp;</th>
          <th colSpan={18} style={{ padding: `10px 0`, letterSpacing: `3px` }}>防御する側のポケモンのタイプ</th>
        </tr>
        <tr>
          <td className={styles.normal}>ノ</td>
          <td className={styles.flame}>炎</td>
          <td className={styles.water}>水</td>
          <td className={styles.electricity}>電</td>
          <td className={styles.grass}>草</td>
          <td className={styles.ice}>氷</td>
          <td className={styles.fighting}>格</td>
          <td className={styles.poison}>毒</td>
          <td className={styles.ground}>地</td>
          <td className={styles.flying}>飛</td>
          <td className={styles.esper}>超</td>
          <td className={styles.insect}>虫</td>
          <td className={styles.rock}>岩</td>
          <td className={styles.ghost}>霊</td>
          <td className={styles.dragon}>竜</td>
          <td className={styles.evil}>悪</td>
          <td className={styles.steel}>鋼</td>
          <td className={styles.fairy}>妖</td>
        </tr>
        <tr>
          <th rowSpan={18} className={styles.tableColor} style={{ verticalAlign: `middle`, padding: `0 15px` }}>攻<br/>撃<br/>す<br/>る<br/>側<br/>の<br/>ポ<br/>ケ<br/>モ<br/>ン<br/>の<br/>タ<br/>イ<br/>プ</th>
          <td className={styles.normal}>ノ</td>
          {drawTypes(types.normal)}
        </tr>
        <tr>
          <td className={styles.flame}>炎</td>
          {drawTypes(types.flame)}
        </tr>
        <tr>
          <td className={styles.water}>水</td>
          {drawTypes(types.water)}
        </tr>
        <tr>
          <td className={styles.electricity}>電</td>
          {drawTypes(types.electricity)}
        </tr>
        <tr>
          <td className={styles.grass}>草</td>
          {drawTypes(types.grass)}
        </tr>
        <tr>
          <td className={styles.ice}>氷</td>
          {drawTypes(types.ice)}
        </tr>
        <tr>
          <td className={styles.fighting}>格</td>
          {drawTypes(types.fighting)}
        </tr>
        <tr>
          <td className={styles.poison}>毒</td>
          {drawTypes(types.poison)}
        </tr>
        <tr>
          <td className={styles.ground}>地</td>
          {drawTypes(types.ground)}
        </tr>
        <tr>
          <td className={styles.flying}>飛</td>
          {drawTypes(types.flying)}
        </tr>
        <tr>
          <td className={styles.esper}>超</td>
          {drawTypes(types.esper)}
        </tr>
        <tr>
          <td className={styles.insect}>虫</td>
          {drawTypes(types.insect)}
        </tr>
        <tr>
          <td className={styles.rock}>岩</td>
          {drawTypes(types.rock)}
        </tr>
        <tr>
          <td className={styles.ghost}>霊</td>
          {drawTypes(types.ghost)}
        </tr>
        <tr>
          <td className={styles.dragon}>竜</td>
          {drawTypes(types.dragon)}
        </tr>
        <tr>
          <td className={styles.evil}>悪</td>
          {drawTypes(types.evil)}
        </tr>
        <tr>
          <td className={styles.steel}>鋼</td>
          {drawTypes(types.steel)}
        </tr>
        <tr>
          <td className={styles.fairy}>妖</td>
          {drawTypes(types.fairy)}
        </tr>
        <tr>
          <th colSpan={20} className={styles.lecture}>
            <span className={styles.type1}>●</span>：2倍
            <span>無印：1倍</span>
            <span className={styles.type2}>▲</span>：0.5倍
            <span className={styles.type3}>✖︎</span>：0倍
          </th>
        </tr>
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