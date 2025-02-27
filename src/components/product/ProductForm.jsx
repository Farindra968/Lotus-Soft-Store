"use client";

import { postProduct } from "@/services/api/productApi";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    try {
      const response = postProduct(data);
      toast.success('Product Add Sucessfully')
      console.log(response.data)
    } catch (error) {
      if (error) {
        toast.error(error.response)
      }
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-Poppins-Semibold text-gray-900 dark:text-white">
          Add Product
        </h2>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
          {/* Product Title */}
          <div>
            <label htmlFor="title" className="font-Poppins">
              Product Name:
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add product name"
              {...register("title", { required: "Product Name is required" })}
              className="w-full bg-gray-100 p-2 mt-1 font-Poppins rounded-md focus:outline-double outline-primary-500"
            />
            <p className="font-Poppins text-red-500">{errors.title?.message}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* category */}
            <div>
              <label htmlFor="category" className="font-Poppins">
                Category:
              </label>
              <input
                type="text"
                id="category"
                placeholder="Add product category"
                {...register("category", {
                  required: "Product category required",
                })}
                className="w-full bg-gray-100 p-2 mt-1 font-Poppins rounded-md focus:outline-double outline-primary-500"
              />
              <p className="font-Poppins text-red-500">
                {errors.category?.message}
              </p>
            </div>
            {/* Price */}
            <div>
              <label htmlFor="price" className="font-Poppins">
                Price:
              </label>
              <input
                type="number"
                id="price"
                placeholder="$10.00"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 0.01,
                    message: "Product Price must be greater than 0",
                  },
                  valueAsNumber: true, // Important: convert string to number
                })}
                className="w-full bg-gray-100 p-2 mt-1 font-Poppins rounded-md focus:outline-double outline-primary-500"
              />
              <p className="font-Poppins text-red-500">
                {errors.price?.message}
              </p>
            </div>
          </div>
          {/* Image */}
          <div>
            <label htmlFor="image" className="font-Poppins">
              Product Image:
            </label>
            <input
              type="url"
              id="image"
            placeholder="https://fakestoreapi.com/img/...."
              {...register("image", {
                required: "Product Image required",
              })}
              className="w-full bg-gray-100 p-2 mt-1 font-Poppins rounded-md focus:outline-double outline-primary-500"
            />
            <p className="font-Poppins text-red-500">{errors.image?.message}</p>
          </div>
                    {/* Image */}
                    <div>
            <label htmlFor="description" className="font-Poppins">
              Product Description:
            </label>
            <textarea
              type="text"
              id="description"
              rows={6}
            placeholder="Type the here"
              {...register("description", {
                required: "Product description required",
              })}
              className="w-full bg-gray-100 p-2 mt-1 font-Poppins rounded-md focus:outline-double outline-primary-500"
            />
            <p className="font-Poppins text-red-500">{errors.description?.message}</p>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          />
        </form>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default ProductForm;
