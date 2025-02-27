import CategoriesCard from "@/components/product/CategoriesCard";
import PrimaryHeading from "@/components/ui/PrimaryHeading";
import { getAllCategories, } from "@/services/api/productApi";
import React from "react";

const page = async () => {
    const categoriesData = await getAllCategories();
    console.log(categoriesData);
  
    return (
      <section className="max-w-screen-xl mx-auto py-6 px-4">
        <div className="border-b border-primary-300 pb-2">
          <PrimaryHeading title="Product Categories" />
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {categoriesData.map((category) => (
            <CategoriesCard key={category.id} category={category} />
          ))}
        </section>
        
      </section>
  );
};

export default page;
