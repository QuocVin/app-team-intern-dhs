import { Box, Button, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ProfileTitle from '../ProfileTitle'
import { useStyles } from './style'
import { validationInfo } from './validationInfo'


function ChangePassword() {

    const userData = useSelector(state => state.loginState.user)
    const [isConfirm, setIsConfirm] = useState(false)
    const [errors, setErrors] = useState({})
    const [passwordData, setPasswordData] = useState({
        password : '',
        newPassword: '',
        repassword: ''
    })


    const handleChange = (e)=>{
        const {name, value} = e.target
        setPasswordData({...passwordData, [name]: value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validationInfo(passwordData))
        setIsConfirm(true)
    }
    const checkUser = (user)=>{
        let flag = false

        axios.post('',user).then(res=>{
            const {status} = res.data
            if(status && status === 200){
                flag = true
            }
        })

        return flag
    }
    const changePassword = ()=>{
        
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isConfirm)
        {
            if(checkUser()){

            }else{
                setErrors({...errors, password: 'Wrong password'})
            }
        }
    }, [errors])
    

    const classes = useStyles()
  return (
    <div>
        <ProfileTitle text={"Change password"}/>
        <Box className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField type={'password'} error={errors.password ? true: false} variant='outlined' label="Current password" name='password' value={passwordData.password} onChange={handleChange} className={classes.input}/>
                {errors.password && <span className={classes.errorMessage}>{errors.username}</span>}

                <TextField type={'password'} error={errors.newPassword ? true: false} variant='outlined' label="New password" name='newPassword' value={passwordData.newPassword} onChange={handleChange} className={classes.input}/>
                {errors.newPassword && <span className={classes.errorMessage}>{errors.name}</span>}

                <TextField type={'password'} error={errors.repassword ? true: false} variant='outlined' label="Repassword" name='repassword' value={passwordData.repassword} onChange={handleChange} className={classes.input}/>
                {errors.repassword && <span className={classes.errorMessage}>{errors.phone}</span>}

                <Button variant="contained" type='Submit' color="primary" className={classes.button}>
                    Submit
                </Button>
            </form>
        </Box>
    </div>
  )
}

export default ChangePassword