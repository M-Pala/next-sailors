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
       // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <h1 style={{padding : '50vh 0', textAlign: 'center'}}>
        Thanks... You will be redirected to home in {redirectSeconds} secs
    </h1>
  )
}

export default Thanks