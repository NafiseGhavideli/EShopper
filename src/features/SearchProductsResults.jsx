import { useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import ProductsItem from "./products/ProductsItem ";
import Empty from "../ui/Empty";

function SearchProductsResults() {
  const products = useLoaderData()
  const [searchParams]= useSearchParams()
  const query=searchParams.get("search")

  return (
    <div className="grid grid-cols-4">
    <div className="" >
     {products.map(item=>item.title.toLowerCase()===query&&<ProductsItem item={item} key={item.id}/>)}
    </div>
    </div>
  )
}

export default SearchProductsResults

export async function loader() {
  const products = await getProducts();
  return products;
}