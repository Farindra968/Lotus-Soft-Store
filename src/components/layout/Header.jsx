"use client";

import config from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import navItems from "@/constant/navItems";
import { MdAccountCircle, MdMenu, MdShoppingCart } from "react-icons/md";
import MiniCart from "@/components/product/MiniCart";
import { ADD_PRODUCT_ROUTE, CATEGORY_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE } from "@/constant/routes";

const Header = () => {
  const [showCart, setShowCart] = useState();
  const [showProfile, setShowPrfile] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState();
  const profileMenu = [
    { name: "My Account", link: "#" },
    { name: "Add Product", link: ADD_PRODUCT_ROUTE },
    { name: "Product", link: PRODUCT_ROUTE },
    { name: "Product Categories", link: CATEGORY_ROUTE },
    { name: "Favourites", link: "#" },
    { name: "Login", link: LOGIN_ROUTE },
  ];

  return (
    <nav className="bg-white dark:bg-text-dark border-b  font-Poppins antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link href="/">
                <Image src={logo} width={35} height={35} alt={config.appName} />
              </Link>
            </div>
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    title
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:space-x-2 relative">
            <button
              onClick={() => setShowCart(!showCart)}
              className="w-10 h-10 rounded-md hover:bg-gray-300 text-2xl"
            >
              <MdShoppingCart className="mx-auto" />
            </button>
            <div
              id=""
              className={`${
                showCart
                  ? "absolute top-14 -right-8 w-80  z-10 mx-auto  space-y-4 overflow-hidden bg-white p-6 antialiased shadow-lg dark:bg-gray-800"
                  : "hidden"
              }`}
            >
              <MiniCart />
            </div>
            <button
              onClick={() => setShowPrfile(!showProfile)}
              className="w-10 h-10 rounded-md hover:bg-gray-300 text-2xl"
            >
              <MdAccountCircle className="mx-auto" />
            </button>
            <div
              className={`${
                showProfile
                  ? " absolute top-14 -right-2 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
                  : "hidden"
              }`}
            >
              <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                {profileMenu.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={`${menu.link}`}
                      title
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                <a
                  href="#"
                  title
                  className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {" "}
                  Sign Out{" "}
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="w-10 h-10 md:hidden rounded-md hover:bg-gray-300 text-2xl"
            >
              <MdMenu className="mx-auto" />
            </button>
          </div>
        </div>
        <div
          className={`${
            showMobileMenu
              ? "bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 md:hidden rounded-lg py-3  px-4 mt-4"
              : "hidden"
          }`}
        >
          <ul className="text-gray-900  text-sm font-medium dark:text-white space-y-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.path}`}
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
