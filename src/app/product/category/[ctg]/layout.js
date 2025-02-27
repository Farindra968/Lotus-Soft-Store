import PrimaryHeading from "@/components/ui/PrimaryHeading";
import { getProductByCategory } from "@/services/api/productApi";
import React from "react";

export  const generateMetadata = async({ params })=> {
  const category = await params.ctg;

  return {
    title: `${category}`,
  };
}

const layout = async({ children, params }) => {
  const category = await params.ctg
  return (
    <section>
    <div className="max-w-screen-xl mx-auto py-6 px-4">
    <div className="border-b border-primary-300 uppercase pb-2">
        <PrimaryHeading title={category} />
      </div>
        {children}
        </div>
  </section>
  );
};

export default layout;
