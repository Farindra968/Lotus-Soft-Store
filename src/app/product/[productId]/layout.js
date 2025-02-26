import { getProductByID } from '@/services/api/productApi';
import React from 'react'

export const generateMetadata = async ({params}) => {
    const id = (await params).productId;
    const product = await getProductByID(id)
    
    return {
        title: `${product.title}`,
      };
}

const layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
