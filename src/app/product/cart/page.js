"use client";

import { CATEGORY_ROUTE, PRODUCT_ROUTE } from "@/constant/routes";
import { decreaseQuantity, increaseQuantity } from "@/redux/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaPaypal,
  FaCreditCard,
  FaTrash,
  FaPlus,
  FaMinus,
  FaTags,
  FaArrowLeft,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCart() {
  const { product, totalprice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();



  // Subtotal
  const subTotal = Math.floor(totalprice)
  //Discount
  const discountOffer = (totalprice - totalprice * 0.9).toFixed(2);


  return (
    <div className=" min-h-screen py-">
      <div className="container mx-auto px-">
        <h1 className="text-2xl font-Poppins-Semibold text-gray-800 mb-8">
          Your Shopping Cart
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items - First Column */}
          <div className="w-full md:w-2/3">
            <div className=" rounded-md text-nowrap overflow-x-scroll lg:overflow-x-hidden   p-6 mb-4">
              <table className="w-full ">
                <thead>
                  <tr className="border-b font-Poppins">
                  <th className="text-left py-4 px-2 font-medium text-sm text-gray-600">
                      S.N
                    </th>
                    <th className="text-left py-4 px-2 font-medium text-sm text-gray-600">
                      Product
                    </th>
                    <th className="text-center py-4 px-2 font-medium text-sm text-gray-600">
                      Price
                    </th>
                    <th className="text-right py-4 px-2 font-medium text-sm text-gray-600">
                    Quantity
                    </th>
                    <th className="text-right py-4 px-2 font-medium text-sm text-gray-600">
                      Total
                    </th>
                    <th className="text-right py-4 px-2 font-medium text-sm text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Product 1 */}
                  {product.map((items, index) => (
                      <tr key={index} className="border-b font-Poppins">
                          <td>{index +1}</td>
                      <td className="py-4 pr-6 md:px-2">
                        <div className="flex  items-center">
                        <Image src={items.image} width={50} height={50} alt={items.title} />
                          <div className="flex flex-col ml-4">
                            <Link href={`${PRODUCT_ROUTE}/${items.id}`} className="font-Poppins pr-8 md:px-0 text-gray-800">
                              {items.title.slice(0,25)}...
                            </Link>
                            <Link href={`${CATEGORY_ROUTE}/${items.category}`} className="text-gray-600 uppercase font-Poppins text-sm">
                              {items.category}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                      <span className="text-gray-700">${Math.floor(items.price)}</span>
                      </td>
                      <td className="py-4 px-2 text-right font-Poppins-Semibold">

                        <div className="flex items-center justify-center">
                          <button className="text-gray-800 focus:outline-none focus:text-gray-600">
                            <FaMinus onClick={()=> dispatch(decreaseQuantity(items))} className="h-3 w-3" />
                          </button>
                          <span  className="text-gray-800 flex items-center justify-center w-10 h-10 border-2 bg-gray-100 rounded-md p-2 font-Poppins-Medium mx-2">
                            {items.quantity}
                          </span>
                          <button onClick={()=>dispatch(increaseQuantity(items))} className="text-gray-800 focus:outline-none focus:text-gray-600">
                            <FaPlus className="h-3 w-3" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-right font-Poppins-Semibold">
                        <span className="text-gray-700">${Math.floor(items.price * items.quantity)}</span>
                      </td>
                      <td className="py-4 px-2 text-right font-Poppins-Semibold">
                        <button className="text-red-500 hover:text-red-600 focus:outline-none">
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="font-Poppins flex justify-between items-center mt-6">
              <Link href={`${PRODUCT_ROUTE}`}
                className="text-indigo-600 hover:text-indigo-500 flex items-center"
              >
                <FaArrowLeft />
                <span>Continue Shopping</span>
              </Link>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Summary - Second Column */}
          <div className="md:w-1/3  ">
            <div className=" sticky top-[118px]  px-6 py-4 mb-4">
              <h2 className="text-lg font-Poppins-Semibold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between font-Poppins mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-Poppins-Medium">${subTotal}</span>
              </div>

              <div className="flex justify-between font-Poppins mb-2">
                <span className="text-gray-600">Discount</span>
                <span className="text-gray-800 font-Poppins-Medium">${discountOffer}</span>
              </div>


              <hr className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="text-lg font-Poppins-Semibold text-gray-800">
                  Total
                </span>
                <span className="text-lg font-Poppins-Semibold text-gray-800">
                  $ {subTotal - discountOffer}
                </span>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <div className="flex items-center border rounded-lg overflow-hidden mb-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="w-full px-4 font-Poppins py-2 outline-none"
                  />
                  <button className="bg-gray-200 font-Poppins text-gray-700 px-4 py-2 flex items-center hover:bg-gray-300 transition-colors">
                    <FaTags className="mr-2" />
                    Apply
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="text-sm font-Poppins-Medium text-gray-700 mb-3">
                  Payment Methods
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded-md p-3 flex items-center justify-center cursor-pointer hover:border-indigo-600 transition-colors">
                    <FaCreditCard className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="border rounded-md p-3 flex items-center justify-center cursor-pointer hover:border-indigo-600 transition-colors">
                    <FaPaypal className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="border rounded-md p-3 flex items-center justify-center cursor-pointer hover:border-indigo-600 transition-colors">
                    <div className="flex items-center">
                      <div className="h-6 w-6 relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full opacity-80"></div>
                        <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-80 ml-3"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <button className="w-full bg-indigo-600 font-Poppins text-white py-3 px-4 rounded-lg hover:bg-indigo-500 transition-colors flex items-center justify-center">
                <FaCreditCard className="mr-2" />
                Proceed to Checkout
              </button>
              <div className="py-6">
              <h2 className="text-sm font-Poppins text-gray-700 mb-3">
                We Accept
              </h2>
              <div className="flex justify-center items-center space-x-4">
                <div className="h-8 w-12 bg-blue-600 rounded"></div>
                <div className="h-8 w-12 bg-orange-500 rounded"></div>
                <div className="h-8 w-12 bg-purple-600 rounded"></div>
                <div className="h-8 w-12 bg-red-500 rounded"></div>
                <div className="h-8 w-12 bg-green-500 rounded"></div>
                <div className="h-8 w-12 bg-yellow-500 rounded"></div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
