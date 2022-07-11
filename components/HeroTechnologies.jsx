import React from 'react'
import style from '../styles/HeroTechnologies.module.scss'
const HeroTechnologies = ({icon, title, desc}) => {
  return (
    <div className={style.mainContainer}>
        <img src={icon}/>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default HeroTechnologies