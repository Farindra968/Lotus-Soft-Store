import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  // Initial state of the cart
  initialState: {
    product: [], // Array to store cart products
    totalprice: 0, // Track the total price of all items in cart
  },

  reducers: {
    // addToCart action - handles adding products to the cart
    addToCart: (state, action) => {
      console.log(action.payload);

      // Extract the product from the action payload
      const product = action.payload;

      // Check if this product already exists in the cart
      // by comparing product IDs
      const sameProduct = state.product.find((item) => item.id === product.id);

      // Handle two different cases based on whether product exists
      if (sameProduct) {
        // Case 1: Product already exists in cart
        // Map through all products and increase quantity of matching product
        state.product = state.product.map((item) => {
          if (item.id === product.id) {
            // Return a new object with increased quantity
            return { ...item, quantity: item.quantity + 1 };
          }
          // Return unchanged items
          return item;
        });
      } else {
        // Case 2: Product doesn't exist in cart
        // Add the new product to the array with quantity of 1
        state.product = [...state.product, { ...product, quantity: 1 }];
      }

      state.totalprice = state.product.reduce((total, item) => {
        total = item.price + state.totalprice;
        return total;
      }, 0);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
