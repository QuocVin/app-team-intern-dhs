import { createSlice } from "@reduxjs/toolkit"

const accessToken = localStorage.getItem('accessToken') || undefined
const isLogin = accessToken ? true : false
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
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
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('user', JSON.stringify(data))
        },
        logout: (state, action)=>{
            state.isLogin = false
            state.accessToken = undefined
            state.user = {}
            localStorage.removeItem('accessToken')
            localStorage.removeItem('user')
        }
    }
})

export const {login, logout } = loginStateSlice.actions
export default loginStateSlice.reducer