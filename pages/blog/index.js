/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import style from '../../styles/Blog.module.scss'
import Link from 'next/link'
import { server } from '../../config'

const Blogs = ({blogs}) => {

    return (

        <div className={style.mainContainer}>
            <h1>Our Latest Stories</h1>
            {blogs.map((blog)=>{
                return (
                    <div key={blog.id} className={style.cardContainer}>
                        <div className={style.imageContainer}>
                            <img src={blog.image} alt={blog.title} />
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
            })}
        </div>
    )
}

export default Blogs

export async function getServerSideProps(){
    const response = await fetch(`${server}/api/blogs/`)
    const data = await response.json()

    return{
        props : {
            blogs : data
        }
    }
}