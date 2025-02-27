'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const MiniCart = () => {
  const { product, totalprice } = useSelector((state) => state.cart);


  // Subtotal
  const subTotal = Math.floor(totalprice)
  //Discount
  const discountOffer = (totalprice - totalprice * 0.9).toFixed(2);



  return (
    <div className="w-full ">
      
      <h2 className="text-lg font-Poppins-Semibold pb-4 text-gray-800 flex items-center">Your Cart</h2>
      <div className="h-72 overflow-y-scroll pr-3">
      {product.map((product, index) => (
              <div key={index} className="pb-4 ">
              <div className="flex gap-4">
                {/* Product Image */}
            <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image src={product.image} width={50} height={50} alt={product.title} />
                </div>
      
                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between">
                <h3 className="font-Poppins text-gray-900 text-base">{product.title.slice(0,20)}..</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors ml-2 -mt-1" aria-label="Remove item">
                      <FaTrashAlt className="w-4 h-4" />
                    </button>
                  </div>
      
                  <p className="mt-1 text-sm text-gray-500">
                    <span className="inline-block bg-gray-100 font-Poppins-Semibold px-2 py-0.5 rounded text-sm text-gray-700">
                      ${Math.floor(product.price)}
                    </span>
                  </p>
      
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border rounded-md border-gray-200 overflow-hidden">
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-50 transition-colors" aria-label="Decrease quantity">
                        <FaMinus className="w-3.5 h-3.5" />
                      </button>
                  <span className="px-3 py-1 text-gray-800 font-medium text-sm min-w-[30px] text-center">{product.quantity}</span>
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-50 transition-colors" aria-label="Increase quantity">
                        <FaPlus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${Math.floor(product.price)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      ))}
      </div>



      <div className="py-2 border-t border-gray-100">
      <div className="flex justify-between items-center">
          <span className="font-Poppins text-gray-700">Subtotal</span>
          <span className="font-Poppins-Medium text-gray-900">${subTotal}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-Poppins text-gray-700">Discount</span>
          <span className="font-Poppins-Medium text-gray-900">${discountOffer}</span>
        </div>
        <hr className="py-1" />
        <div className="flex justify-between items-center">
          <span className="font-Poppins-Medium text-gray-700">Total</span>
          <span className="font-Poppins-Semibold text-gray-900">${subTotal - discountOffer}</span>
        </div>
        <div className="mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
