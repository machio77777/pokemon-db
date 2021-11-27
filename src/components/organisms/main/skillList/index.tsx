import Link from 'next/link'
import { TYPE_KEY, TYPE_NAME, replaceTypeName } from 'utils/commonType'
import styles from './skillList.module.css'

interface skill {
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
}
interface Props {
  rows: skill[]
}

const SkillList = (props: Props) => {

  const initial = ['すべて', 'あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ']
  const classification = ['すべて', '変化', '物理', '特殊']

  return (
    <>
      <p>条件を指定して絞り込む。</p>
      <nav className={styles.search}>
        <div>
          <p>頭文字</p>
          <ul style={{ marginTop: `10px` }}>
            {initial.map((row, index) => {
              return (
                <li key={index}>{row}</li>
              )
            })}
          </ul>
        </div>
        <div>
          <p>タイプ</p>
          <ul style={{ marginTop: `10px` }}>
            <li>すべて</li>
            <li className={TYPE_KEY.NORMAL}>{TYPE_NAME.NORMAL}</li>
            <li className={TYPE_KEY.FLAME}>{TYPE_NAME.FLAME}</li>
            <li className={TYPE_KEY.WATER}>{TYPE_NAME.WATER}</li>
            <li className={TYPE_KEY.ELECTRICITY}>{TYPE_NAME.ELECTRICITY}</li>
            <li className={TYPE_KEY.GRASS}>{TYPE_NAME.GRASS}</li>
            <li className={TYPE_KEY.ICE}>{TYPE_NAME.ICE}</li>
            <li className={TYPE_KEY.FIGHTING}>{TYPE_NAME.FIGHTING}</li>
            <li className={TYPE_KEY.POISON}>{TYPE_NAME.POISON}</li>
            <li className={TYPE_KEY.GROUND}>{TYPE_NAME.GROUND}</li>
            <li className={TYPE_KEY.FLYING}>{TYPE_NAME.FLYING}</li>
            <li className={TYPE_KEY.ESPER}>{TYPE_NAME.ESPER}</li>
            <li className={TYPE_KEY.INSECT}>{TYPE_NAME.INSECT}</li>
            <li className={TYPE_KEY.ROCK}>{TYPE_NAME.ROCK}</li>
            <li className={TYPE_KEY.GHOST}>{TYPE_NAME.GHOST}</li>
            <li className={TYPE_KEY.DRAGON}>{TYPE_NAME.DRAGON}</li>
            <li className={TYPE_KEY.EVIL}>{TYPE_NAME.EVIL}</li>
            <li className={TYPE_KEY.STEEL}>{TYPE_NAME.STEEL}</li>
            <li className={TYPE_KEY.FAIRY}>{TYPE_NAME.FAIRY}</li>
          </ul>
        </div>
        <div>
          <p>分類</p>
          <ul style={{ marginTop: `10px` }}>
            {classification.map((row, index) => {
              return (
                <li key={index}>{row}</li>
              )
            })}
          </ul>
        </div>
      </nav>
      <table className={styles.table}>
        <thead>
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
        </thead>
        <tbody>
        {props.rows.map((row, index) => {
          return (
            <tr key={index}>
              <td>
                <Link href='/'><a>{row.name}</a></Link>
              </td>
              <td className={styles.skillType}>{drawType(row.type)}</td>
              <td>{row.classifying}</td>
              <td>{row.power}</td>
              <td>{row.dai}</td>
              <td>{row.hit}</td>
              <td>{row.pp}</td>
              <td>{drawDirect(row.direct)}</td>
              <td>{drawDefence(row.defence)}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </>
  )
}

const drawType = (type: string) => {
  return <span className={TYPE_KEY[replaceTypeName(type)]}>{type}</span>
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