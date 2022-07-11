import React from 'react'
import style from '../styles/HeroBlogCardTertiory.module.scss'

const HeroBlogCardTertiory = ({icon}) => {
  return (
    <div className={style.mainContainer}>
      <img src={icon}/>
      <div className={style.textContainer}>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod, minus voluptate aspernatur hic modi vero labore et autem at ducimus harum aut porro, beatae minima non magnam facilis quasi!</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default HeroBlogCardTertiory