'use client'
import { addToCart } from '@/redux/cart/cartSlice'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const AddToCart = ({product}) => {

    const dispatch = useDispatch();
    function addProductToCart() {
        dispatch(addToCart(product))
    }
  return (
            <button onClick={addProductToCart} className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FaShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
  )
}

export default AddToCart;
