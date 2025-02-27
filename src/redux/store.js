import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "@/redux/cartSlice/cartSlice.js"

const store = configureStore ({
    reducer: {
        cart: cartSliceReducer,
    }
})

export {store}