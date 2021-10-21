import { Link } from 'react-router-dom'
import style from './index.module.css'
// import video from '../../assets/landing.mp4'

const Landing = () => {
  return (
    <>
      <div className={style.landing__container}>
        <h1>Countries & Tours</h1>
        <Link className={style.link} to='/home'>
          <button className={style.btn}>
            <span>Explore</span>
          </button>
        </Link>
      </div>
    </>
  )
}

export default Landing
