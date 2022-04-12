import {configureStore} from '@reduxjs/toolkit'
import loginStateReducer from './login/loginSlice'
import cartStateReducer from './cart/cartSlice'

 const store = configureStore({
    reducer: {
        loginState: loginStateReducer,
        cartState: cartStateReducer
    }
})
export default store