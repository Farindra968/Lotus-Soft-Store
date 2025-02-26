import ImageViewer from "@/components/product/ImageViewer";
import SingleProduct from "@/components/product/SingleProduct";
import { CATEGORY_ROUTE } from "@/constant/routes";
import { getProductByID } from "@/services/api/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaRegStar, FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const id = (await params).productId;
  const product = await getProductByID(id);
  console.log(id, product);

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    return (
      <>
        {[...Array(5)].map((_, index) =>
          index < roundedRating ? (
            <FaStar key={index} className="h-4 w-4 text-yellow-400" />
          ) : (
            <FaRegStar key={index} className="h-4 w-4 text-yellow-400" />
          )
        )}
      </>
    );
  };

  const offerPrice = (product.price * 0.8).toFixed(2);
    const discountOffer = ((product.price - offerPrice) / product.price) * 100;

  return (
    <section className="max-w-screen-xl m-auto h-auto bg-white dark:bg-transparent">
      <div className="flex flex-col lg:flex-row justify-center items-center py-6">
        {/* 1st cols [Product Image] */}
        <div className="w-[80%] h-auto p-6 relative">
          <div className="flex justify-center">
                      <ImageViewer product={product} />
          </div>
          <p className="flex justify-center items-center z-20 w-10 h-10 bg-secondary-800 font-poppins-semibold rounded-full text-sm text-white absolute top-2 right-5">
            {Math.round(discountOffer)}%
          </p>
        </div>
        {/* 2nd cols [Product Details] */}
        <div className="w-full h-auto p-6">
          {/* Reviews */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              {renderStars(product.rating?.rate || 0)}
            </div>
            <p className="text-sm font-Poppins-Medium text-gray-900 dark:text-white">
              {product.rating?.rate.toFixed(1)}
            </p>
            <p className="text-sm font-Poppins-Medium text-gray-500 dark:text-gray-400">
              ({product.rating?.count})
            </p>
          </div>
          <h1 className="text-xl capitalize sm:text-2xl md:text-3xl text-primary-800 dark:text-text-light-200 font-Poppins-Bold">
            {product.title}
          </h1>

          {/* Categories, Brand, SKU  */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 border-b-2 border-gray-200 dark:border-gray-700 ">
            <p className=" font-Poppins-Medium  text-text-secondary dark:text-gray-200">
              Categories:{" "}
              <Link href={`${CATEGORY_ROUTE}/${product.category}`} className="text-text-dark dark:text-text-light font-Poppins-Semibold uppercase ">
                {product.category || "No Category"}
              </Link>
            </p>
          </div>
          {/* Short Description */}
          <div className="py-4">
            <div>
              <p className="text-text-dark dark:text-gray-300  font-Poppins-Medium">
                Description:
              </p>
              <p className="text-sm font-Poppins text-text-muted dark:text-gray-200 py-2">
                {product.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4">
            <p className="text-3xl font-Poppins-Bold text-primary-700 dark:text-primary-300">
              <span className="text-secondary-500 font-Poppins-Bold">
                $
              </span>{" "}
              {Math.round(offerPrice)}
            </p>
            <p className="text-xl line-through font-Poppins-Semibold text-secondary-600 dark:text-secondary-400">
              रु {product.price}
            </p>
          </div>
          {/* Cart Buttom */}
          <div className="flex justify-start items-center gap-4">
            <button className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FaShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className=" border-2 border-text-muted rounded-lg flex justify-center items-center p-3 dark:text-gray-200 hover:dark:text-text-default hover:bg-gray-200">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      <section className="py-10">

      </section>
    </section>
  );
};

export default ProductDetails;
