import styles from './h3.module.css'

interface Props {
  heading: string
}

const H3 = (props: Props) => {
  return (
    <h3 className={styles.heading}>{props.heading}</h3>
  )
}

export default H3