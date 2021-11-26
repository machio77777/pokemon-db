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
    <>
      <p>条件を指定して絞り込む。</p>
      <nav className={styles.search}>
        <div>
          <p>頭文字</p>
          <ul style={{ marginTop: `10px` }}>
            <li>すべて</li>
            <li>あ</li>
            <li>か</li>
            <li>さ</li>
            <li>た</li>
            <li>な</li>
            <li>は</li>
            <li>ま</li>
            <li>や</li>
            <li>ら</li>
            <li>わ</li>
          </ul>
        </div>
        <div>
          <p>タイプ</p>
          <ul style={{ marginTop: `10px` }}>
            <li>すべて</li>
            <li className='normal'>ノーマル</li>
            <li className='flame'>ほのお</li>
            <li className='water'>みず</li>
            <li className='electricity'>でんき</li>
            <li className='grass'>くさ</li>
            <li className='ice'>こおり</li>
            <li className='fighting'>かくとう</li>
            <li className='poison'>どく</li>
            <li className='ground'>じめん</li>
            <li className='flying'>ひこう</li>
            <li className='esper'>エスパー</li>
            <li className='insect'>むし</li>
            <li className='rock'>いわ</li>
            <li className='ghost'>ゴースト</li>
            <li className='dragon'>ドラゴン</li>
            <li className='evil'>あく</li>
            <li className='steel'>はがね</li>
            <li className='fairy'>フェアリー</li>
          </ul>
        </div>
        <div>
          <p>分類</p>
          <ul style={{ marginTop: `10px` }}>
            <li>すべて</li>
            <li>変化</li>
            <li>物理</li>
            <li>特殊</li>
          </ul>
        </div>
      </nav>
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
    </>
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