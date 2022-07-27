import BgVideo from '../components/BgVideo'
import HeroBlogCard from '../components/HeroBlogCard'
import HeroBlogCardSecondary from '../components/HeroBlogCardSecondary'
import HeroBlogCardTertiory from '../components/HeroBlogCardTertiory'
import HeroTechnologies from '../components/HeroTechnologies'
import style from '../styles/Home.module.scss'
import { server } from '../config'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Home({blogs}) {

  const heroBlogs = blogs.slice(0,3)
  const secondaryHeroBlogs = blogs.slice(3,5)
  return (
    <div>
      <main>
        <BgVideo/>
        <div className={style.heroContent}>
          <motion.h1 initial='hidden' animate='visible' variants={{
            hidden:{
              scale: .9,
              y: 10,
              opacity: 0
            },
            visible:{
              scale: 1,
              y: 0,
              opacity: 1,
              transition: {
                delay: .5,
                duration: .5,
                ease: 'backInOut'
              }
            }
          }}>Welcome to <span>World's Greatest Sailors</span></motion.h1>
          <h4><i><motion.span>Build.</motion.span><motion.span>Ship.</motion.span><motion.span> Transport</motion.span></i></h4>
          <div className={style.btnContainer}>
          <Link href={'#HeroCardContainer'}><button className={style.btn} href={'#heroCardContainer'}>Get Started</button></Link>
          <Link href={'/about'}><button className={`${style.btn} ${style.btnSecondary}`}>About Us</button></Link>
          </div>
        </div>
      </main>
      
      <section id='HeroCardContainer' className={style.heroCardContainer}>
        {heroBlogs.map((blog)=>{
          return <HeroBlogCard key={blog.id} blog={blog}/>
        })}
      </section>

      

      <section id={style.heroCardSecondaryContainer}>
        {secondaryHeroBlogs.map((blog)=>{
          return <HeroBlogCardSecondary key={blog.id} blog={blog}/>
        })}
      </section>

      <section id={style.heroCardTertioryContainer}>
        <HeroBlogCardTertiory blog={blogs[2]} icon='assets/images/icon1.png'/>
        <HeroBlogCardTertiory blog={blogs[3]} icon='assets/images/icon2.png'/>
      </section>

      <section id={style.heroTechnologiesContainer}>
        <HeroTechnologies icon='assets/images/icon3.png' title='Gas Power' desc='Gas power technology developers are exploring new roles and applications to ensure gas power will remain relevant as power markets embrace decarbonization.'/>
        <HeroTechnologies icon='assets/images/icon4.png' title='Electric Power' desc='Electric power is the rate, per unit time, at which electrical energy is transferred by an electric circuit. The SI unit of power is the watt, one joule per second.'/>
        <HeroTechnologies icon='assets/images/icon5.png' title='Wind Power' desc='Wind power or wind energy is mostly the use of wind turbines to generate electricity.'/>
        <HeroTechnologies icon='assets/images/icon6.png' title='Power Line' desc='It consists of one or more uninsulated electrical cables (commonly multiples of three for three-phase power) suspended by towers or poles.'/>
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