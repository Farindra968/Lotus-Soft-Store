"use client";

import {  postLogin } from "@/services/api/authApi";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    try {
      const { username, password } = data; // Extract username and password
      const response = await postLogin(username, password)
      const respnse = localStorage.setItem("apiToken", response.token)

      toast.success('Login Sucessfully')
      console.log(response, 'Login Sucessfully')

    } catch (error) {
      toast.error(error.response?.data)
      
    }
      
    };
    const [showPassword, setShowPassword]=useState()
  return (
    <div class="">
      <div class="min-h-screen flex fle-col  justify-center py-12 px-4">
        <div class="grid md:grid-cols-2  gap-6 max-w-screen-lg ">
          <div>
            <h2 class="lg:text-5xl text-3xl font-Poppins-Bold lg:leading-[55px] bg-gradient-to-tr from-primary-600 to-secondary-600 bg-clip-text inline-block text-transparent">
              Fast & Secure Login for Shopping
            </h2>
            <p class="text-sm mt-6 text-gray-800 font-Poppins">
              Sign in to explore exclusive deals, track your orders, and enjoy a
              seamless shopping experience with us.
            </p>
            <p class="text-sm mt-12 text-gray-800 font-Poppins">
              New to our store?
              <Link
                href={`/`}
                class="text-blue-600 font-semibold hover:underline ml-1"
              >
                Create an account
              </Link>{" "}
              and start shopping today!
            </p>
          </div>

          <form
          onSubmit={handleSubmit(submit)}
            class="max-w-md md:ml-auto w-full"
          >
            <h3 class="text-gray-800 text-3xl font-Poppins-Bold mb-8">
              Sign in
            </h3>
            <div>
                          <div>
                              <label htmlFor="username" className="font-Poppins-Semibold">Username:</label>
                              <input type="text" id="username" placeholder="Enter Username" {...register("username", { required: 'Username is required' })}  className="font-Poppins border-2 rounded-md p-2 w-full"/>
                              <p className="font-Poppins text-red-500">{errors.username?.message}</p>
                          </div>
                          <div className="py-4 relative">
                              <label htmlFor="password" className="font-Poppins-Semibold">Password</label>
                              <input type={showPassword ? 'text': 'password'} id="password" placeholder="Enter Password" {...register("password", { required: 'Password is required' })} className="font-Poppins border-2 rounded-md p-2 w-full" />
                              <p onClick={() => setShowPassword(!showPassword)} className="absolute top-[54px] right-6 text-xl">
                                  {
                                      showPassword? <IoMdEye />:<IoMdEyeOff />
                                  }
                                  </p>
                              <p className="font-Poppins text-red-500">{errors.password?.message}</p>
                          </div>
                          <input type="submit" value='submit' className="bg-primary-500 px-4 py-2 rounded-lg font-Poppins-Medium text-white capitalize cursor-pointer my-2 "/>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default LoginForm;
