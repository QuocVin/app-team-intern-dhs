import { Box, Button, Divider, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from './style'
import validationInfo from './validationInfo'
import axios from 'axios'
import { userUpdate as userUpdateApi } from '../../common/api'
import { useHistory } from 'react-router'
import { updateUser } from '../../redux/login/loginSlice'
import ProfileTitle from '../ProfileTitle'

const changeProfile = (user)=>{
    return axios.put(userUpdateApi+ '/' + user.id, user,{
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}

const ProfileChange = () => {
    const {user} = useSelector(state => state.loginState)
    const date_ob = new Date(user.date_ob)
    const date_obFormat = `${date_ob.getFullYear()}-${date_ob.getMonth()}-${date_ob.getDate()}`
    const [userData, setUserData] = useState({...user, date_ob: date_obFormat})
    
    const classes = useStyles()
    const [errors, setErrors] = useState({})
    const [isConfirm, setIsConfirm] = useState(false)
    const [processing, setProcessing] = useState(false)
    
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validationInfo(userData))
        setIsConfirm(true)
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isConfirm){
            setProcessing(true)
            changeProfile(userData)
            .then(res => {
                const {data, status, mess} = res.data
                if(status && status === 201){
                    dispatch(updateUser({user: data}))
                    history.push('/Profile')

                }else{
                    setProcessing(false)
                }
            }).catch(err => setProcessing(false))
        }
    }, [errors])
    
  return ( processing ? <h1>Changing your proifle...</h1> : 
    <div>
        <ProfileTitle text={"Change your profile"}/>
        <Box className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField type={'text'} error={errors.username ? true: false} disabled variant='outlined' label="Username" name='username' value={userData.username} className={classes.input}/>
            {errors.username && <span className={classes.errorMessage}>{errors.username}</span>}

            <TextField type={'text'} error={errors.name ? true: false} variant='outlined' label="Name" name='name' value={userData.name} onChange={handleChange} className={classes.input}/>
            {errors.name && <span className={classes.errorMessage}>{errors.name}</span>}

            <TextField type={'text'} error={errors.phone ? true: false} variant='outlined' label="Phone" name='phone' value={userData.phone} onChange={handleChange} className={classes.input}/>
            {errors.phone && <span className={classes.errorMessage}>{errors.phone}</span>}

            <TextField type={'text'} error={errors.mail ? true: false} variant='outlined' label="Email" name='mail' value={userData.mail} onChange={handleChange} className={classes.input}/>
            {errors.mail && <span className={classes.errorMessage}>{errors.mail}</span>}

            <TextField type={'date'} error={errors.date_ob ? true: false} variant='outlined' label="Birthday" name='date_ob' value={userData.date_ob} onChange={handleChange} className={classes.input}/>
            {errors.date_ob && <span className={classes.errorMessage}>{errors.date_ob}</span>}

            <Button variant="contained" type='Submit' color="primary" className={classes.button}>
                Submit
            </Button>
        </form>
        </Box>
          
    </div>
  )
}

export default ProfileChange