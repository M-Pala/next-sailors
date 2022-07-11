import React, { useEffect, useState } from 'react'
import style from '../styles/Navbar.module.scss'
import Link from 'next/link'
import {AiOutlineHome,AiOutlineInfoCircle, AiOutlineMail} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'

const Navbar = () => {

    // const [offset, setOffset] = useState(0)
    const [navColor, setNavColor] = useState(false)
  useEffect(()=>{

    function navColorChange(){
        var windowY = window.scrollY
        if(windowY >= 300){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }
    }
    
    window.addEventListener('scroll', navColorChange)
  })
  return (
    <>
      <div className={`${style.navContainer} ${navColor ? style.navColored : null}`}>
          <div className={style.navLogoContainer}>
              <h3>Next-Sailors</h3>
          </div>
          <div className={style.navLinksContainer}>
              <div><Link href={'/'}><AiOutlineHome/></Link></div>
              <div><Link href={'/about'}><AiOutlineInfoCircle/></Link></div>
              <div><Link href={'/blog'}><BiNews/></Link></div>
              <div><AiOutlineMail/></div>
          </div>    
      </div>

  </>
  )
}

export default Navbar