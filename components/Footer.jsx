import React from 'react'
import style from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div id={style.footer}>
        <h2>Next Sailors</h2>
        <p><a>About</a> | <a>Contact Us</a> | Project Made with next js</p>
    </div>
  )
}

export default Footer