// import React, { useEffect, useState } from 'react'
// import style from '../styles/Navbar.module.scss'
// import Link from 'next/link'
// import { AiOutlineHome,AiOutlineInfoCircle, AiOutlineMail} from 'react-icons/ai'
// import {BiX, BiMenuAltRight, BiNews} from 'react-icons/bi'
// import {GrClose} from 'react-icons/gr'

// const Navbar = () => {

//   const [navColor, setNavColor] = useState(false)
//   const [open, setOpen] = useState(false)

//   const opneMenu = () =>{
//     setOpen(!open)
//   }

//   useEffect(()=>{

//     function navColorChange(){
//         var windowY = window.scrollY
//         if(windowY >= 300){
//             setNavColor(true)
//         }
//         else{
//             setNavColor(false)
//         }
//     }
    
//     window.addEventListener('scroll', navColorChange)
//   })
//   return (
//     <>
//       <div className={`${style.navContainer} ${navColor ? style.navColored : null}`}>
//           <div className={style.navLogoContainer}>
//           <Link href={'/'}><h3>Next-Sailors</h3></Link>
//           </div>
//           <div className={style.navLinksContainer}>
//               <div><Link href={'/'}><AiOutlineHome/></Link></div>
//               <div><Link href={'/blog'}><BiNews/></Link></div>
//               <div><Link href={'/about'}><AiOutlineInfoCircle/></Link></div>
//               <div><Link href={'/contactUs'}><AiOutlineMail/></Link></div>
//           </div>
//       </div>
//           <div onClick={opneMenu}>
//             {open ?<BiX className={style.mdMenu} /> :  <BiMenuAltRight className={style.mdMenu} />}
//           </div>
//           {open && <div className={style.resNavLinksContainer}>
//               <div onClick={()=>setOpen(false)}><Link href={'/'} ><AiOutlineHome/></Link></div>
//               <div onClick={()=>setOpen(false)}><Link href={'/blog'} ><BiNews/></Link></div>
//               <div onClick={()=>setOpen(false)}><Link href={'/about'} ><AiOutlineInfoCircle/></Link></div>
//               <div onClick={()=>setOpen(false)}><Link href={'/contactUs'} ><AiOutlineMail/></Link></div>
//           </div>}

//   </>
//   )
// }

// export default Navbar