import List from 'components/molecules/list'
import styles from './library.module.css'

const Library = () => {

  const path = '/pokemon-icon/monster-ball.png'
  const alt  = 'monster-ball'
  const rows = [
    { path: path, alt: alt, url: '/', name: 'ガラル図鑑ソードシールド' },
    { path: path, alt: alt, url: '/', name: 'ガラル地方のポケモン一覧' },
    { path: path, alt: alt, url: '/', name: '種族値ランキング' },
  ]
  return (
    <div className={styles.library}>
      <h2 className={styles.heading}>ポケモン図鑑</h2>
      <List rows={rows} />
    </div>
  )
}

export default Library