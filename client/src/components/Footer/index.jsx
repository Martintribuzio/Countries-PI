import styles from './index.module.css'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href='https://github.com/Martintribuzio'
        rel='noreferrer'
        target='_blank'>
        <img src={github} alt='' />
      </a>
    </div>
  )
}

export default Footer
