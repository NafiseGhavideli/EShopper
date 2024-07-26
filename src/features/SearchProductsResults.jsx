import { useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import ProductsItem from "./products/ProductsItem ";

function SearchProductsResults() {
  const products = useLoaderData()
  const [searchParams]= useSearchParams()
  const query=searchParams.get("search")
  let items =[];
  
  products.map(item=>item.title.toLowerCase().includes(query) && items.push(item))

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-24 gap-x-12 gap-y-6 grow" >
     
     {items && items.map(item=><ProductsItem item={item} key={item.id}/>)}

    </div>
  )
}

export default SearchProductsResults

export async function loader() {
  const products = await getProducts();
  return products;
}