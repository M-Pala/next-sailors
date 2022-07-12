import BgVideo from '../components/BgVideo'
import HeroBlogCard from '../components/HeroBlogCard'
import HeroBlogCardSecondary from '../components/HeroBlogCardSecondary'
import HeroBlogCardTertiory from '../components/HeroBlogCardTertiory'
import HeroTechnologies from '../components/HeroTechnologies'
import style from '../styles/Home.module.scss'
import { server } from '../config'


export default function Home({blogs}) {

  const heroBlogs = blogs.slice(0,3)
  const secondaryHeroBlogs = blogs.slice(3,5)
  return (
    <div >
      <main>
        <BgVideo/>
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
        {heroBlogs.map((blog)=>{
          return <HeroBlogCard blog={blog}/>
        })}
      </section>

      

      <section id={style.heroCardSecondaryContainer}>
        {secondaryHeroBlogs.map((blog)=>{
          return <HeroBlogCardSecondary blog={blog}/>
        })}
      </section>

      <section id={style.heroCardTertioryContainer}>
        <HeroBlogCardTertiory icon='assets/images/icon1.png'/>
        <HeroBlogCardTertiory icon='assets/images/icon2.png'/>
      </section>

      <section id={style.heroTechnologiesContainer}>
        <HeroTechnologies icon='assets/images/icon3.png' title='title' desc='This is our latest technologies usdbf evsi h awkjebrdr idb fdfilsbdifv disbiasfdfvs ousdbfd bsedbfou esfub '/>
        <HeroTechnologies icon='assets/images/icon4.png' title='title' desc='This is our latest technologies'/>
        <HeroTechnologies icon='assets/images/icon5.png' title='title' desc='This is our latest technologies'/>
        <HeroTechnologies icon='assets/images/icon6.png' title='title' desc='This is our latest technologies'/>
      </section>

      
    </div>
  )
}


export async function getStaticProps(){
  const response = await fetch(`${server}/api/blogs/`)
  const data = await response.json()

  return{
      props : {
          blogs : data
      }
  }
}