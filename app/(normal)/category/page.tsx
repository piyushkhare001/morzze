import CategoryBanner from '@/components/category/CategoryBanner'
import CategorySection from '@/components/category/CategorySection'
import ScrollingRibbon from '@/components/category/ScrollingRibbon'
import SimpleCategoryBanner from '@/components/category/SimpleCategoryBanner'
import { getCategories } from '@/helper/category/action'
import React from 'react'

const page = async () => {
  const categories = await getCategories();

  return (
    <div>
      <CategoryBanner/>
      <CategorySection categories={categories}/>
      <SimpleCategoryBanner/>
      <ScrollingRibbon/>
    </div>
  )
}

export default page
