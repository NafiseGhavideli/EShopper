import { useContext } from "react";
import { HiEye, HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import QuantityContext from "../../services/QuantityContext";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function ProductsItem( {item} ) {
  const {setQuantity}=useContext(QuantityContext)
  const dispatch =useDispatch()
  const { id,title, price, image ,description} = item;
  
  function handleAddToCart(){
    setQuantity(quantity=>quantity+1)
    const newItem={
      productId:id,
      title,
      price,
      image,
      totalPrice: price*1
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="font-poppins border border-neutral-100 flex flex-col shadow-sm justify-end">
      
        
      <img src={image} alt={title} className="sm:p-5 p-2 max-h-72 self-center" />
     
      
      <div className="flex flex-col">
      <div className="lg:text-base sm:text-sm text-xs  text-center border-y border-neutral-200 py-6 px-5 ">
        <h6 className=" text-ellipsis whitespace-nowrap overflow-hidden mb-3 ">{title}</h6>
        <h6 className="md:font-semibold">{`${price} $`}</h6>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-3 p-4 lg:text-sm text-xs ">

        <div className="flex items-center gap-3 justify-center relative" >
         
       <HiEye size={'1rem'}/>
            View Detail

        <div className=" absolute invisiable opacity-0 hover:visible 
        hover:opacity-100 lg:w-80 w-52 transition-opacity bg-neutral-50
        border rounded-sm shadow-sm z-30 mx-auto -top-14">
            <div className="md:m-6 m-4 overflow-hidden" >
            <span className="text-sm lg:text-base mb-2 font-semibold block">
              {title}
              </span>
              <p className="truncate">
                {description}
                </p>
            </div>
          </div>
          
        </div>
 
        <Link className="flex items-center gap-2 justify-center" onClick={()=>handleAddToCart()}>
          <HiShoppingCart size={'1rem'}/>
          Add To Cart
        </Link>
      </div>
  </div>    
    </li>
  );
}

export default ProductsItem;
