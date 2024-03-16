import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

function SearchProducts() {
  const navigate= useNavigate()
  const [searchParams]= useSearchParams()
  const query=searchParams.get("search")

  function handleSearchBox(query){
      navigate({
        pathname: "search",
        search: createSearchParams({
            search: query.toLowerCase()
                }).toString()
    });
}
  return (
    <div className="basis-1/2">
      <input
     className="border-neutral-200 border font-poppins rounded-lg p-3 w-full h-max"
     type="text"
     placeholder="Search for products ..."
     value={query||""}
     onChange={(e) => {
       handleSearchBox(e.target.value);
      }}
      />
    </div>
  )
}

export default SearchProducts

