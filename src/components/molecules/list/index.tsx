import Link from 'next/link'
import Img from 'components/atoms/img'
import styles from './list.module.css'

interface Props {
  rows: {
    name: string,
    url:  string,
    path: string,
    alt:  string
  }[]
}

const List = (props: Props) => {
  return (
    <ul className={styles.list}>
      {props.rows.map((row, index) => {
        return (
          <li key={index}>
            <Link href={row.url}>
              <a><Img path={row.path} alt={row.alt} />{row.name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default List