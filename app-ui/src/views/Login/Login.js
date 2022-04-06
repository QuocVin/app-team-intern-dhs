import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import { Button, FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import {useStyles} from './Login-styles'
import axios from 'axios'
import validationInfo from '../../components/useForm/validationInfo'

const urlApi = ''

const login = (user)=>{
    return axios.get(urlApi) 
}


export default function Login() {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })


    const [errors, setErrors] = useState({})
    const [isConfirm, setIsConfirm] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validationInfo(user))
        setIsConfirm(true)
        
    }
    const handleChange = (e)=>{
        const {value, name} = e.target
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isConfirm){
            alert('ok')
        }
    },[errors])

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Login</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField  label="Username" error={errors.username ? true: false } variant='outlined' name='username' value={user.username} onChange={handleChange} className={classes.input}/>
                {errors.username && <span className={classes.errorMessage}>{errors.username}</span>}

                <TextField type={'password'} error={errors.password ? true: false} variant='outlined' label="Password" name='password' value={user.password} onChange={handleChange} className={classes.input}/>
                {errors.password && <span className={classes.errorMessage}>{errors.password}</span>}

                <Button variant="contained" type='Submit' color="primary" disableElevation className={classes.button}>
                    Submit
                </Button>
            </form>
        </div>
    )
}