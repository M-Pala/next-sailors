import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Thanks = () => {

    const [redirectSeconds, setRedirectSeconds] = useState(5);
    const router = useRouter();
    useEffect(() => {
        if (redirectSeconds === 0){
            router.push('/')
        }
        else{
            setTimeout(()=>{
                setRedirectSeconds(redirectSeconds-1)
            },1000)
        }
       }, [redirectSeconds]);
  return (
    <h1 style={{padding : '50vh', textAlign: 'center'}}>
        Thanks... You will be redirected to home in {redirectSeconds} secs
    </h1>
  )
}

export default Thanks