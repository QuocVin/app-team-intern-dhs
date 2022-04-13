import { createSlice } from "@reduxjs/toolkit"
import cookies from 'react-cookies'


const accessToken = cookies.load('accessToken')
const isLogin = accessToken ? true : false
const user = cookies.load('user')
const initialState = {
    isLogin: isLogin,
    accessToken: accessToken,
    user: user
}

export const loginStateSlice = createSlice({
    name: 'loginState',
    initialState,
    reducers: {
        login: (state,action) =>{
            const {accessToken, data} = action.payload
            state.isLogin = true
            state.accessToken = accessToken
            state.user = data

            cookies.save('accessToken', accessToken)
            cookies.save('user', data)
        },
        logout: (state, action)=>{
            state.isLogin = false
            state.accessToken = undefined
            state.user = {}
            cookies.remove('accessToken')
            cookies.remove('user')

        },
        updateUser: (state, action)=>{
            const {user} = action.payload
            state.user = user
            cookies.save('user', user)
        }
    }
})

export const {login, logout, updateUser } = loginStateSlice.actions
export default loginStateSlice.reducer