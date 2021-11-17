import styles from './h2.module.css'

interface Props {
  heading: string
}

const H2 = (props: Props) => {
  return (
  <h1 className={styles.heading}>{props.heading}</h1>
  )
}

export default H2