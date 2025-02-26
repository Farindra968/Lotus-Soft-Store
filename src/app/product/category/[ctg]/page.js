import ProductCard from '@/components/product/ProductCard';
import PrimaryHeading from '@/components/ui/PrimaryHeading';
import { getProductByCategory } from '@/services/api/productApi';
import React from 'react'

const page = async ({params}) => {
    const category = params.ctg;
    const productData = await getProductByCategory(category)

    console.log(productData, category);
  return (
    <section className="max-w-screen-xl mx-auto py-6 px-4">
    <div className="border-b border-primary-300 uppercase pb-2">
      <PrimaryHeading title={category} />
    </div>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      {
        productData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }

    </section>
  </section>
  )
}

export default page
