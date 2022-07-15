// /* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import style from '../../styles/SingleBlog.module.scss'
// import { server } from '../../config'

// const SingleBlog = ({blogDetails : { title, subtitle, image, content, author}}) => {

//   return (
//     <>      
//         <div className={style.mainContainer}>
//           <h1>{title}</h1>
//           <div className={style.imageContainer}>
//             <img src={image} alt={title}/>
//           </div>
//           <h4>{subtitle}</h4>
//           <br/>
//           <br/>
//           <pre>{content}</pre>
//           <h5>Author : <em>{author}</em></h5>
//         </div>

//     </>
//   )
// }

// export default SingleBlog

// export async function getServerSideProps({params:{blogId}}){
//   const response = await fetch(`${server}/api/blogs/${blogId}`)

//   const data = await response.json()
//   return{
//       props : {
//           blogDetails : data
//       }
//   }
// }