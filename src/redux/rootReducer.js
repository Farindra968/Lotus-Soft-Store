import { combineReducers } from "@reduxjs/toolkit"
import cartSliceReducer from "@/redux/cart/cartSlice.js"

const rootReducer = combineReducers({
    cart: cartSliceReducer,
})


export default rootReducer