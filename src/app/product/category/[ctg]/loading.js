import ProductCardLoader from '@/components/product/loader/ProductCardLoader'
import React from 'react'

const loading = () => {
  return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
              <ProductCardLoader />
              <ProductCardLoader />       
              <ProductCardLoader/>       
              <ProductCardLoader />       
              <ProductCardLoader />       
              <ProductCardLoader />       
              <ProductCardLoader />       
              <ProductCardLoader/>       
      </section>
  )
}

export default loading
