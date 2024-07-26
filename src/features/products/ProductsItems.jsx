/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import ProductsItem from "./ProductsItem ";
import Empty from "../../ui/Empty";

function ProductsItems() {
  const products = useLoaderData()
  const [searchParams]= useSearchParams();
  const currentFilter = searchParams.get("price") || "all"
  const currentCategory=searchParams.get("category") || "categories"

  let filteredItems
  if(currentCategory==="categories") filteredItems=products
  if(currentCategory!=="categories"&& currentFilter === "all")filteredItems=products.filter(product=>product.category===currentCategory)
  if(currentCategory==="categories" &&  currentFilter!=="all")filteredItems= products.filter(product=>product.price<currentFilter)
  if(currentCategory!=="categories" && currentFilter !== "all"){
    filteredItems=products.filter(product=>product.price<currentFilter && product.category===currentCategory)
  }

  return (
    <ul className="grid sm:grid-cols-3 grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-6 sm:grow ">
      { filteredItems? filteredItems.map((item) => (
        <ProductsItem item={item} key={item.id} />
      )): <Empty/>}
    </ul>
  );
}
export async function loader() {
  const products = await getProducts();
  return products;
}
export default ProductsItems;
