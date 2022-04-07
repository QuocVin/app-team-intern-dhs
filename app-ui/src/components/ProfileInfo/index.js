import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProfileInfo = () => {
  const isLogin = useSelector(state => state.loginState.isLogin)
  const accessToken = useSelector(state => state.loginState.accessToken)
  useEffect(() => {
    console.log(accessToken);
  
    
  }, [])
  
  
  return (
    <div>
      <h1>thang {accessToken}</h1>
    </div>
  )
}

export default ProfileInfo