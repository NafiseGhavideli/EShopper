import { useSearchParams } from "react-router-dom"
/* eslint-disable react/prop-types */
function Filter({filterField,options}) {
  const [searchParams,setSearchParams]=useSearchParams()
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value){
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      {options.map(option=><div key={option.value} className="flex gap-3 items-center font-poppins text-lg font-medium mb-2">
        <input type="checkbox" value={option.value}
         onChange={()=>handleClick(option.value) }
         checked={option.value === currentFilter} 
         />
        <p>{option.lable}</p>
        </div>)}
    </div>
  )
}

export default Filter
