import React from 'react'
import style from '../styles/Navbar.module.scss'
import {AiOutlineHome,AiOutlineInfoCircle, AiOutlineMail} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'

const Navbar = () => {
  return (
    <>
      <div className={style.navContainer}>
          <div className={style.navLogoContainer}>
              <h3>Next-Sailors</h3>
          </div>
          <div className={style.navLinksContainer}>
              <AiOutlineHome/>
              <AiOutlineInfoCircle/>
              <BiNews/>
              <AiOutlineMail/>
          </div>    
      </div>

  </>
  )
}

export default Navbar