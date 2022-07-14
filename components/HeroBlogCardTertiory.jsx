import Link from 'next/link'
import React from 'react'
import style from '../styles/HeroBlogCardTertiory.module.scss'

const HeroBlogCardTertiory = ({icon, blog}) => {
  return (
    <div className={style.mainContainer}>
      <img src={icon}/>
      <div className={style.textContainer}>
        <h3>{blog.title}</h3>
        <p>{blog.subtitle}</p>
        <Link href={`/blog/${blog.id}`}><button>Learn More</button></Link>
      </div>
    </div>
  )
}

export default HeroBlogCardTertiory