import { HiOutlineFilter } from "react-icons/hi";
import Filter from "../../ui/Filter";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

function ProductsSidebar() {
  const [isFilterOpen, setIsFilterOpen] =useState(false)
  console.log(isFilterOpen)
  return (
    <>
    <div className="lg:basis-2/3 relative">
    <div className="lg:hidden border p-2 rounded-md border-neutral-200" onClick={()=>setIsFilterOpen(!isFilterOpen)}>
    {isFilterOpen ?<HiOutlineXMark  size={"1.5rem"} />:<HiOutlineFilter size={"1.5rem"} />}</div> 
    
      <div className={`${!isFilterOpen&&"hidden "} mx-6 my-4 lg:block`}>
        <h5 className="font-poppins font-semibold md:text-2xl  mb-4">
          Filter by price
        </h5>
        <Filter
        filterField="price"
        options={[{value:'all',lable:"All"},{value:"300",lable:"Less than 300 $"},{value:'600',lable:"Less than 600 $"},{value:'900',lable:"Less than 900 $"}]}
        defaultChecked={false}
        />
      </div>
    </div>
        </>
  );
}

export default ProductsSidebar;
