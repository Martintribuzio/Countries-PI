'../../__tests__/01-NavBar.test.js'
import styles from './index.module.css'
import icon from '../../assets/icon2.png'
import createIcon from '../../assets/create.png'
import homeIcon from '../../assets/home.png'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.NavBar__container}>
      <figure className={styles.logo}>
        <img src={icon} alt='icon' />
      </figure>
      <nav>
        <ul>
          <Link className={styles.item} to='/home'>
            <figure className={styles.navIcon}>
              <img src={homeIcon} alt='icon' />
            </figure>
            Home
          </Link>
          <Link className={styles.item} to='/home/new_tour'>
            <figure className={styles.navIcon}>
              <img src={createIcon} alt='icon' />
            </figure>
            Add tourist activity
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
