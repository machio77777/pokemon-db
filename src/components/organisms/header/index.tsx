import Link from 'next/link'
import styles from './header.module.css'

interface Props {
  sitename: string
}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <h1><Link href={'/'}><a>{props.sitename}</a></Link></h1>
    </header>
  )
}

export default Header