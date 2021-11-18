import styles from './h2.module.css'

interface Props {
  heading: string
}

const H2 = (props: Props) => {
  return (
    <h2 className={styles.heading}>{props.heading}</h2>
  )
}

export default H2