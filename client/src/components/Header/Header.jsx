import styles from './header.module.css'

const Header = ({ title, subtitle, img, height, icon }) => {
  return (
    <div
      className={styles.header__container}
      style={{ height: height, backgroundImage: `url(${img})` }}>
      <div className={styles.header__container__inside}>
        <h1 className={styles.title}>
          {title}
          {icon ? <img src={icon} alt='' /> : null}
        </h1>

        {subtitle ? <p className={styles.title}>{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default Header
