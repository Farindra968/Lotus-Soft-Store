'use client'
import { CATEGORY_ROUTE, PRODUCT_ROUTE } from "@/constant/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar, FaHeart, FaTruck, FaWallet, FaRegStar } from "react-icons/fa";
import { AddToCart2 } from "./AddToCart";

const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        const roundedRating = Math.round(rating)
        return (
          <>
            {[...Array(5)].map((_, index) =>
              index < roundedRating ? (
                <FaStar key={index} className="h-4 w-4 text-yellow-400" />
              ) : (
                <FaRegStar key={index} className="h-4 w-4 text-yellow-400" />
              ),
            )}
          </>
        )
    }

    const offerPrice = (product.price * 0.8).toFixed(2);
    const discountOffer = ((product.price - offerPrice) / product.price) * 100;

    const[showWhistle, setShowWhistle] = useState(false);
  
    
  return (
    <div className="rounded-lg bg-white border border-gray-200  p-6 shadow-sm ">
      <div className="h-52 w-full relative">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
          className="h-52 mx-auto"
        />
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={()=>setShowWhistle(!showWhistle)}
            className="absolute top-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Add to Favorites</span>
            <FaHeart className={`h-5 w-5 ${showWhistle? 'text-red-500':'text-gray-500'}`} />
          </button>
        </div>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-secondary-100 px-2.5 py-0.5 text-xs font-Poppins text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300">
             {Math.floor(discountOffer)}% off
          </span>
          <Link href={`${CATEGORY_ROUTE}/${product.category}`} className="me-2 rounded uppercase bg-primary-100 px-2.5 py-0.5 text-xs font-Poppins text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {product.category}
          </Link>
        </div>
        <Link href={`${PRODUCT_ROUTE}/${product.id}`}>
          <h1 className="text-lg h-10 overflow-hidden text-ellipsis font-Poppins-Medium leading-tight text-gray-900 hover:underline">
            {product.title}
          </h1>
        </Link>
        <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center">{renderStars(product.rating?.rate || 0)}</div>
          <p className="text-sm font-Poppins text-gray-900 dark:text-white">{product.rating?.rate.toFixed(1)}</p>
          <p className="text-sm font-Poppins text-gray-500 dark:text-gray-400">({product.rating?.count})</p>
        </div>
        <ul className="mt-2 font-Poppins flex items-center gap-4">
          <li className="flex items-center gap-2">
            <FaTruck className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fast Delivery
            </p>
          </li>
          <li className="flex items-center gap-2">
            <FaWallet className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Best Price
            </p>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-Poppins-Semibold leading-tight text-gray-900">
            ${offerPrice}
          </p>
          <AddToCart2 product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
