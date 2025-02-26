"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";

const ImageViewer = ({ product }) => {
  const [showImage, setShowImage] = useState();
  return (
    <section>
      <div onClick={()=>setShowImage(!showImage)}>
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.title}
        />
      </div>
      <div  className={`${showImage? 'z-50 bg-black bg-opacity-85 fixed top-0 right-0 h-svh w-full flex justify-center items-center': 'hidden'}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.title}
          className="aspect-auto object-cover "
        />
        <button onClick={()=>setShowImage(!showImage)} className="text-3xl md:text-5xl text-white fixed top-10 right-10 ">
          <TbXboxXFilled />
        </button>
      </div>
    </section>
  );
};

export default ImageViewer;
