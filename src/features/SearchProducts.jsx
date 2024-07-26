import { useState } from "react";
import { HiMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

function SearchProducts() {
  const [isInputOpen, setIsInputOpen] =useState(false)
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
  <div className="md:basis-1/2 relative">
    <div className="md:hidden border p-2 rounded-md border-neutral-200 right-0" onClick={()=>setIsInputOpen(!isInputOpen)}>
      {isInputOpen ?
      
      <HiOutlineXMark  size={"1.5rem"} /> : <HiMagnifyingGlass size={"1.5rem"} /> }</div>
       <input
     className={`${isInputOpen?
      " absolute z-100":
        "hidden "}md:inline-block md:static border right-0  border-neutral-200  font-poppins rounded-lg p-2 md:p-3 my-5`}   
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

