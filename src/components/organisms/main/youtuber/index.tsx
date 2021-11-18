import Img from 'components/atoms/img'
import styles from './youtuber.module.css'

const Youtuber = () => {
  const path = '/pokemon-icon/mysterious-egg.png'
  const alt  = 'mysterious-egg'
  const rows = [
    { name: 'もこうの実況', channel: 'https://www.youtube.com/user/mokoustream'},
    { name: 'ライバロリ', channel: 'https://www.youtube.com/channel/UCSdExItCszcnIp-roT7b0kw'},
    { name: 'あゆみんch', channel: 'https://www.youtube.com/channel/UCgFRNARJowqHnI7LNkXndBQ'},
    { name: 'バンビー', channel: 'https://www.youtube.com/channel/UCNOnv5No5KtT3fmvcztSkEg'},
    { name: 'グラch', channel: 'https://www.youtube.com/channel/UCV9T1OMNYOBGffQdhgbnv8A'},
    { name: 'アシキch', channel: 'https://www.youtube.com/channel/UCDLXHZ72-ccUrUL423TbjdA'},
    { name: 'ランドセル', channel: 'https://www.youtube.com/channel/UCYdBH0w5bNr5_M6vZRL9hjQ'},
  ]
  return (
    <div className={styles.youtuber}>
      <ul className={styles.list}>
        {rows.map((row, index) => {
          return (
            <li key={index}>
              <a href={row.channel} target='_blank'><Img path={path} alt={alt} />{row.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Youtuber