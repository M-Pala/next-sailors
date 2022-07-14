import React from 'react'
import style from '../styles/ContactUs.module.scss'
import { server } from '../config'
const contactUs = () => {
    return (
        <section id={style.contactUsContainer}>
            <div className={style.secondaryContainer}>
    
              <h1>
                Get in touch
              </h1>
              <form action="https://formsubmit.co/2f4bbf8f714df8b631a67a14d4cd0265" className={style.formContainer} method='POST'>
                <input type='text' name='name' placeholder='Name' required/>
                <input type='email' name='email' placeholder='email' required/>
                <textarea placeholder='Your Comments' name='comments'/>
                <input type="hidden" name="_next" value={`${server}/thanks`}></input>
                <div className={style.btnContainer}>
                  <button type='submit'>Send !</button>
                </div>
              </form>
            </div>
            <div className={style.imageContainer}>
                <div className={style.overlay}></div>
                <img src='https://images.unsplash.com/photo-1504607798333-52a30db54a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
            </div>
          </section>
      )
}

export default contactUs