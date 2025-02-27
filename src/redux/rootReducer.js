import { combineReducers } from "@reduxjs/toolkit"
import cartSliceReducer from "@/redux/cartSlice/cartSlice.js"

const rootReducer = combineReducers({
    cart: cartSliceReducer,
})


export default rootReducer