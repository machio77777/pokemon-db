import styles from './img.module.css'

interface Props {
  path: string,
  alt: string
}

const Img = (props: Props) => {
  return (
    <img src={props.path} alt={props.alt} />
  )
}

export default Img