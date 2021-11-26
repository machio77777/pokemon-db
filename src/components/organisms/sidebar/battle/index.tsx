import List from 'components/molecules/list'
import styles from './battle.module.css'

const Battle = () => {
  const path = '/pokemon-icon/master-ball.png'
  const alt  = 'master-ball'
  const rows = [
    { path: path, alt: alt, url: '/mybox',    name: 'ボックス管理' },
    { path: path, alt: alt, url: '/party',    name: 'パーティー考察' },
    { path: path, alt: alt, url: '/strategy', name: '戦術考察' },
  ]
  return (
    <div className={styles.battle}>
      <h2 className={styles.heading}>ポケモン対戦</h2>
      <List rows={rows} />
    </div>
  )
}

export default Battle