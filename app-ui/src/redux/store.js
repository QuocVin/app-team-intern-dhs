import {configureStore} from '@reduxjs/toolkit'
import loginStateReducer from './login/loginSlice'


 const store = configureStore({
    reducer: {
        loginState: loginStateReducer
    }
})
export default store