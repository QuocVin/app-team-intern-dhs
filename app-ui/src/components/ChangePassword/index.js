import { Box, Button, Snackbar, TextField, Typography } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cookies from 'react-cookies';
import { useSelector } from 'react-redux'
import { API, endpoints } from '../../common/api'

import ProfileTitle from '../ProfileTitle'
import { useStyles } from './style'
import { validationInfo } from './validationInfo'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ChangePassword() {

    const userData = useSelector(state => state.loginState.user)
    const [isConfirm, setIsConfirm] = useState(false)
    const [errors, setErrors] = useState({})
    const [showSnackBar, setShowSnackBar] = useState({
        open: false,
        severity: 'success',
        vertical: 'bottom',
        horizontal: 'right',
        text: '',
    })
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

        axios.post(API,user).then(res=>{
            const {status} = res.data
            if(status && status === 200){
                flag = true
            }
        })

        return flag
    }
    const changePassword = ({username, password, newPassword})=>{
        return API.post(endpoints.changePassword, {
            username: username, 
            password: password,
            newPassword: newPassword,
        },{
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
        })
    }
    const showErrorSnackBar = (text) =>{
        setShowSnackBar({...showSnackBar, open: true, severity: 'error', text})
    }
    const showSuccessSnackBar = (text) =>{
        setShowSnackBar({...showSnackBar, open: true, severity: 'success', text})
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setShowSnackBar({...showSnackBar, open: false})
      };
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isConfirm)
        {
            const user = cookies.load('user')
            changePassword({
                username: user.username,
                password: passwordData.password,
                newPassword: passwordData.newPassword
            })
            .then(res=>{
                const {accessToken, status} = res.data
                if(status && status === 200){
                    showSuccessSnackBar('Success: Your password changed')
                    cookies.save('user', JSON.stringify({...user, password: passwordData.newPassword}))
                    cookies.save('accessToken', accessToken)
                    setPasswordData({
                        password : '',
                        newPassword: '',
                        repassword: ''
                    })
                }else{
                    showErrorSnackBar(`Failed: Current password is wrong`)
                    setErrors({...errors, password: 'Current password is wrong'})
                }
            }).catch(err => console.log(err))
        }
    }, [errors])
    

    const classes = useStyles()
  return (
    <div>
        <ProfileTitle text={"Change password"}/>
        <Box className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField type={'password'} error={errors.password ? true: false} variant='outlined' label="Current password" name='password' value={passwordData.password} onChange={handleChange} className={classes.input}/>
                {errors.password && <span className={classes.errorMessage}>{errors.password}</span>}

                <TextField type={'password'} error={errors.newPassword ? true: false} variant='outlined' label="New password" name='newPassword' value={passwordData.newPassword} onChange={handleChange} className={classes.input}/>
                {errors.newPassword && <span className={classes.errorMessage}>{errors.newPassword}</span>}

                <TextField type={'password'} error={errors.repassword ? true: false} variant='outlined' label="Repassword" name='repassword' value={passwordData.repassword} onChange={handleChange} className={classes.input}/>
                {errors.repassword && <span className={classes.errorMessage}>{errors.repassword}</span>}

                <Button variant="contained" type='Submit' color="primary" className={classes.button}>
                    Submit
                </Button>
            </form>
        </Box>
        <Snackbar 
        open={showSnackBar.open} 
        autoHideDuration={3000} 
        onClose={handleClose} 
        anchorOrigin={{vertical: showSnackBar.vertical, horizontal: showSnackBar.horizontal}}>
            <Alert onClose={handleClose} severity={showSnackBar.severity}>
                {showSnackBar.text}
            </Alert>
        </Snackbar>
    </div>
  )
}

export default ChangePassword