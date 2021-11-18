import List from 'components/molecules/list'
import styles from './traning.module.css'

const Traning = () => {

  const path = '/pokemon-icon/super-ball.png'
  const alt  = 'super-ball'
  const rows = [
    { path: path, alt: alt, url: '/', name: 'ステータス計算' },
    { path: path, alt: alt, url: '/', name: 'ダメージ計算（単体）' },
    { path: path, alt: alt, url: '/', name: 'ダメージ計算（複数）' },
  ]
  return (
    <div className={styles.traning}>
      <h2 className={styles.heading}>ポケモン育成</h2>
      <List rows={rows} />
    </div>
  )
}

export default Traning