import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import { Button, FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import {useStyles} from './style'
import axios from 'axios'
import validationInfo from './validationInfo'
import {userAuthApi} from '../../common/api'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../../redux/login/loginSlice'

const doLogin = (user)=>{
    return axios.post(userAuthApi, {
        username: user.username,
        password: user.password
    }, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
    })
}


export default function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [isLoging, setIsLoging] = useState(false)
    const [loginError, setLoginError] = useState(undefined)


    const dispatch = useDispatch()
    const isLogin = useSelector((state)=> state.loginState.isLogin)

    const history = useHistory()

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
            setIsLoging(true)
            doLogin(user)
            .then((res)=>{
                const {data, status, accessToken, mess}= res.data
                if(status && status === 200){
                    dispatch(login({
                        accessToken,
                        data
                    }))
                    history.push('/')
                }
                else{
                    setLoginError(mess)
                    setIsLoging(false)
                }
            })
            .catch((err)=> setIsLoging(false))
        }
    },[errors])

    const classes = useStyles()
    return (
         isLoging ? <h1>Login processing...</h1>
            :<div>
                {loginError && <span className={classes.errorMessage}>{loginError}</span>}
                {isLogin && <h2 onClick={()=>dispatch(logout())}>da login</h2>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField  label="Username" error={errors.username ? true: false } variant='outlined' name='username' value={user.username} onChange={handleChange} className={classes.input}/>
                    {errors.username && <span className={classes.errorMessage}>{errors.username}</span>}

                    <TextField type={'password'} error={errors.password ? true: false} variant='outlined' label="Password" name='password' value={user.password} onChange={handleChange} className={classes.input}/>
                    {errors.password && <span className={classes.errorMessage}>{errors.password}</span>}
                    <div className={classes.forgotPassword}>
                        <Link to='/'>Forgot password?</Link>
                    </div>        
                    <Button variant="contained" type='Submit' color="primary" disableElevation className={classes.button}>
                        Login
                    </Button>
                </form>
            </div>
    )
}