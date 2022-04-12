import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import validationInfo from './validationInfo'
import { useStyles } from './style'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { API, endpoints } from '../../common/api'
import ButtonProcess from '../ButtonProcess'


const doRegister = ({username,password,name,date_ob,phone,mail,role_name}) =>{
    return API.post(endpoints['register'], {
        username,password,name,date_ob,phone,mail,role_name
    },{
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
    })
}

const FormRegister = ({callback}) => {
    const classes = useStyles()
    const [user, setUser] = useState({
        username: "",
        password:"",
        repassword: "",
        name : "",
        date_ob: "",
        phone:"",
        mail:"",
        role_name:"Guest"
    })

    const [isRegisting, setIsRegisting] = useState(false)
    const [registerError, setRegisterError] = useState(undefined)

    const dispatch = useDispatch()
    const history = useHistory()

    const [errors, setErrors] = useState({})
    const [isConfirm, setIsConfirm] = useState(false)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validationInfo(user))
        setIsConfirm(true)

    }

    useEffect(() => {
      if(Object.keys(errors).length === 0 && isConfirm){
          setIsRegisting(true)
          doRegister(user).then((res)=>{
              const {data, status, mess} = res.data
              if(status && status === 201){
                  callback()
              }else{
                  setIsRegisting(false)
                  setRegisterError(mess)
                  window.scroll(0, 0)
              }
          }).catch(error => {
               setIsRegisting(false)
            })
      }
    }, [errors])
    

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
        {registerError && <span className={classes.errorMessage}>{registerError}</span>}
        <TextField  label="Username" required error={errors.username ? true: false } variant='outlined' name='username' value={user.username} onChange={handleChange} className={classes.input}/>
        {errors.username && <span className={classes.errorMessage}>{errors.username}</span>}

        <TextField  label="Password" type={'password'} required error={errors.password ? true: false } variant='outlined' name='password' value={user.password} onChange={handleChange} className={classes.input}/>
        {errors.password && <span className={classes.errorMessage}>{errors.password}</span>}

        <TextField  label="Repassword" type={'password'} required error={errors.repassword ? true: false } variant='outlined' name='repassword' value={user.repassword} onChange={handleChange} className={classes.input}/>
        {errors.repassword && <span className={classes.errorMessage}>{errors.repassword}</span>}

        <TextField  label="Your name" required error={errors.name ? true: false } variant='outlined' name='name' value={user.name} onChange={handleChange} className={classes.input}/>
        {errors.name && <span className={classes.errorMessage}>{errors.name}</span>}

        <TextField label="Your birthday" type={'date'} InputLabelProps={{
          shrink: true,
        }} variant='outlined' required error={errors.date_ob ? true: false } name='date_ob' value={user.date_ob} onChange={handleChange} className={classes.input}/>
        {errors.date_ob && <span className={classes.errorMessage}>{errors.date_ob}</span>}
        
        <TextField  label="Your phone" required error={errors.phone ? true: false } variant='outlined' name='phone' value={user.phone} onChange={handleChange} className={classes.input}/>
        {errors.phone && <span className={classes.errorMessage}>{errors.phone}</span>}

        <TextField  label="Your email" required error={errors.mail ? true: false } variant='outlined' name='mail' value={user.mail} onChange={handleChange} className={classes.input}/>
        {errors.mail && <span className={classes.errorMessage}>{errors.mail}</span>}

        

        <ButtonProcess loading={isRegisting} type={"submit"}>
            Register
        </ButtonProcess>
    </form>
  )
}

export default FormRegister