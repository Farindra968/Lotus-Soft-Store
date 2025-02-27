import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        product: [],
        totalprice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            const product = action.payload
            state.product = {...state.product, product }
        }

    }
    
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;