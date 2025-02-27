import CategoriesCard from "@/components/product/CategoriesCard";
import ProductCard from "@/components/product/ProductCard";
import SecondaryHeading from "@/components/ui/SecondaryHeading";
import { CATEGORY_ROUTE, PRODUCT_ROUTE } from "@/constant/routes";
import { getUser,  } from "@/services/api/authApi";
import { getAllCategories, getProduct } from "@/services/api/productApi";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const categoriesData = await getAllCategories(); /// categories
  const productData = await getProduct(); /// product
  const user = await getUser();
  console.log(categoriesData, productData, user);

  return (
    <section className="max-w-screen-xl mx-auto py-6 px-4">
      {/* Categories */}
      <section className="py-6">
        <SecondaryHeading title="Shop by categories" path={CATEGORY_ROUTE} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {categoriesData.slice(0, 12).map((category) => (
            <CategoriesCard key={category} category={category} />
          ))}
        </div>
      </section>
      {/* Product */}
      <section className="py-6">
        <SecondaryHeading title="Latest Products" path={PRODUCT_ROUTE} />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {productData.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Home;
