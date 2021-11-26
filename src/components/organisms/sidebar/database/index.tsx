import List from 'components/molecules/list'
import styles from './database.module.css'

const Database = () => {
  const path = '/pokemon-icon/heavy-ball.png'
  const alt  = 'heavy-ball'
  const rows = [
    { path: path, alt: alt, url: '/compatibility', name: 'タイプ相性表' },
    { path: path, alt: alt, url: '/personality',   name: '性格補正表' },
    { path: path, alt: alt, url: '/skills',        name: 'すべての技リスト' },
    { path: path, alt: alt, url: '/characters',    name: 'すべての特性リスト' },
  ]
  return (
    <div className={styles.database}>
      <h2 className={styles.heading}>データベース</h2>
      <List rows={rows} />
    </div>
  )
}

export default Database