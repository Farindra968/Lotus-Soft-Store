import { CATEGORY_ROUTE } from '@/constant/routes'
import Link from 'next/link'
import React from 'react'

const CategoriesCard = ({category}) => {
  return (
    <Link href={`${CATEGORY_ROUTE}/${category}`} class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
    <span class="text-sm font-medium text-gray-900  uppercase">{category}</span>
  </Link>
  )
}

export default CategoriesCard
