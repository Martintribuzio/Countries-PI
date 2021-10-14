import { Link } from 'react-router-dom'
import style from './index.module.css'
// import video from '../../assets/landing.mp4'

const Landing = () => {
  return (
    <>
      <div className={style.landing__container}>
        {/* <video autoPlay='autoPlay' loop='loop' muted className={style.video}>
          <source src={video} type='video/mp4' />
        </video> */}
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
