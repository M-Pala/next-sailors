import BgVideo from '../components/BgVideo'
import HeroBlogCard from '../components/HeroBlogCard'
import Navbar from '../components/Navbar'
import style from '../styles/Home.module.scss'

// import heroBg from ''
export default function Home() {
  return (
    <div >
      <main>
        <BgVideo/>
        <Navbar/>
        <div className={style.heroContent}>
          <h1>Welcome to <span>World's Greatest Sailors</span></h1>
          <h4><i>Build. Ship. Transport</i></h4>
          <div className={style.btnContainer}>
            <button className={style.btn}>Get Started</button>
            <button className={`${style.btn} ${style.btnSecondary}`}>About Us</button>
          </div>
        </div>
      </main>
      
      <section id={style.heroCardContainer}>
        <HeroBlogCard/>
        <HeroBlogCard/>
        <HeroBlogCard/>
      </section>

      <section id={style.aboutContainer}>
        <h1>
          About Next Sailors
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt arcu non sodales neque sodales ut etiam. Dictum at tempor commodo ullamcorper. Enim diam vulputate ut pharetra sit amet aliquam id. Commodo nulla facilisi nullam vehicula ipsum a arcu. Consectetur a erat nam at lectus. 
        </p>
        <p>
        Odio ut sem nulla pharetra diam. Nisi est sit amet facilisis magna. Adipiscing elit pellentesque habitant morbi tristique senectus et. Egestas fringilla phasellus faucibus scelerisque. Metus aliquam eleifend mi in nulla posuere. Nunc mattis enim ut tellus. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Magna etiam tempor orci eu lobortis. Quis auctor elit sed vulputate mi sit amet mauris. Ac felis donec et odio pellentesque diam. Condimentum id venenatis a condimentum vitae.
        </p>
      </section>
    </div>
  )
}
