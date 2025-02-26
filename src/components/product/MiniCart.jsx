import Link from "next/link";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

const MiniCart = () => {
  const cartData = [
    {
      name: "Apple iPhone 15",
      price: 599,
      quantity: 1,
    },
    {
      name: "Apple iPad Air",
      price: 499,
      quantity: 1,
    },
    {
      name: "Apple Watch SE",
      price: 598,
      quantity: 2,
    },
    {
      name: "Sony Playstation 5",
      price: 799,
      quantity: 1,
    },
    {
      name: 'Apple iMac 20"',
      price: 8997,
      quantity: 3,
    },
  ];

  return (
    <div>
      {cartData.map((cart, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-200 py-2"
        >
          <div>
            <h3 className="font-Poppins-Medium">{cart.name}</h3>
            <p className="font-Poppins text-gray-700">${cart.price}</p>
          </div>
          <p>{cart.quantity}</p>
          <buttom className="text-red-500 text-xl">
            <MdDeleteForever />
          </buttom>
        </div>
      ))}
      <Link
        href={`/`}
        title
        className=" mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        role="button"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default MiniCart;
