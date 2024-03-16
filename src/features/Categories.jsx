import {  createSearchParams, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { getCategories } from "../services/apiProducts";
 
function Categories() {
  const categories = useLoaderData()
  const navigate = useNavigate()
  const [searchParams]= useSearchParams()
  const currentCategory=searchParams.get("category")

  function handleCategories(category){
    navigate({
      pathname: "products",
      search: createSearchParams({
          category: category.toLowerCase()
              }).toString()
  });
    }
    return (
      <select
        className="px-12 py-3 mt-4 cursor-pointer bg-rose-50 font-poppins rounded-md border-none text-lg font-medium"
        value={currentCategory || "categories"}
        onChange={(e) => handleCategories(e.target.value)}
      >
        <option className="bg-neutral-50">
          Categories
        </option>
        {categories.map((category) => (
          <option value={category} key={category} className="bg-neutral-50">
            {category}
          </option>
        ))}
      </select>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const categories = await getCategories();
  return categories;
}
export default Categories;
