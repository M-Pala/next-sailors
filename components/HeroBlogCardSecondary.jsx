/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import style from '../styles/HeroBlogCardSecondary.module.scss'

const HeroBlogCardSecondary = ({blog}) => {
  return (
    <div className={style.mainContainer}>
        <div className={style.imageContainer}>
            <img src={blog.image} alt="title" />
        </div>
        <div className={style.textContainer}>
            <h4>{blog.title}</h4>
            <h5>{blog.subtitle}</h5>
            <div className={style.bottomContainer}>
                <p><AiOutlineUser/> {blog.author}</p>
                <Link href={`/blog/${blog.id}`}><button>Learn More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroBlogCardSecondary