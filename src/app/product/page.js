import ProductCard from "@/components/product/ProductCard";
import PrimaryHeading from "@/components/ui/PrimaryHeading";
import { getProduct } from "@/services/api/productApi";
import React from "react";

const Product = async () => {
  const productData = await getProduct();
  console.log(productData);
  return (
    <section className="max-w-screen-xl mx-auto py-6 px-4">
      <div className="border-b border-primary-300 pb-2">
        <PrimaryHeading title="Product List" />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
        {
          productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }

      </section>
    </section>
  );
};

export default Product;
