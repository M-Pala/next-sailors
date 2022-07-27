import React from 'react'
import style from '../styles/HeroBlogCard.module.scss'
import {AiOutlineUser} from 'react-icons/ai'
import Link from 'next/link'
import {motion} from 'framer-motion'

const HeroBlogCard = ({blog}) => {
  return (
    
    <motion.div whileHover={{
      scale: 1.1
    }} className={style.mainContainer}>
        <h4>{blog.title}</h4>
        <h5>{blog.subtitle}</h5>
        <div className={style.bottomContainer}>
            <p><AiOutlineUser/> {blog.author}</p>
            <Link href={`/blog/${blog.id}`}><button>Learn More</button></Link>
        </div>
    </motion.div>
  )
}

export default HeroBlogCard