import React from 'react'
import style from '../styles/HeroBlogCard.module.scss'
import {AiOutlineUser} from 'react-icons/ai'

const HeroBlogCard = () => {
  return (
    <div className={style.mainContainer}>
        <h4>Title</h4>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eligendi corrupti ad deleniti esse assumenda eveniet ipsum neque culpa? Ullam?</h5>
        <div className={style.bottomContainer}>
            <p><AiOutlineUser/> Madhav</p>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default HeroBlogCard