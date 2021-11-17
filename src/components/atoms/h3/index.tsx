import styles from './h3.module.css'

interface Props {
  heading: string
}

const H3 = (props: Props) => {
  return (
  <h1 className={styles.heading}>{props.heading}</h1>
  )
}

export default H3