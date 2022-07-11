import React from 'react'
import style from '../../styles/SingleBlog.module.scss'

const SingleBlog = ({blogDetails : {id, title, subtitle, image, content, author, error}}) => {

  return (
    <>      
        <div className={style.mainContainer}>
          <h1>{title}</h1>
          <div className={style.imageContainer}>
            <img src={image}/>
          </div>
          <h4>{subtitle}</h4>
          <br/>
          <br/>
          <pre>{content}</pre>
          <h5>Author : <em>{author}</em></h5>
        </div>

    </>
  )
}

export default SingleBlog

export async function getServerSideProps({params:{blogId}}){
  const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`)
  // if(response){
  //   const data = await response.json()
  // }
  // else {
  //   const data = 'wrong'
  // }
  const data = await response.json()
  return{
      props : {
          blogDetails : data
      }
  }
}