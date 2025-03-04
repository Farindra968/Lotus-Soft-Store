'use client'
import { addToCart } from '@/redux/cart/cartSlice'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const AddToCart = ({ product }) => {
  const products = {id:product.id, title:product.title, image:product.image, price:product.price, category:product.category}
    const dispatch = useDispatch();
    function addProductToCart() {
        dispatch(addToCart(products))
    }
  return (
            <button onClick={addProductToCart} className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FaShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
  )
}

const AddToCart2 = ({ product }) => {
  const products = {id:product.id, title:product.title, image:product.image, price:product.price, category:product.category}
    const dispatch = useDispatch();
    function addProductToCart() {
        dispatch(addToCart(products))
    }
  return (
            <button onClick={addProductToCart} className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-1.5 px-2.5 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FaShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
  )
}

export  {AddToCart, AddToCart2};
