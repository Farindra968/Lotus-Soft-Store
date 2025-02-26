import { getProductByCategory } from "@/services/api/productApi";
import React from "react";

export async function generateMetadata({ params }) {
  const category = (await params).ctg;

  return {
    title: `${category}`,
  };
}

const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
