import styles from './h1.module.css'

interface Props {
  heading: string
}

const H1 = (props: Props) => {
  return (
    <h1 className={styles.heading}>{props.heading}</h1>
  )
}

export default H1