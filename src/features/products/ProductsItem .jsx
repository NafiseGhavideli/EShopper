import { useContext } from "react";
import { HiEye, HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import QuantityContext from "../../services/QuantityContext";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function ProductsItem( {item }) {
  const {setQuantity}=useContext(QuantityContext)
  const dispatch =useDispatch()
  const { id,title, price, image } = item;
  
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
    <li className="font-poppins border border-neutral-100 flex flex-col justify-between shadow-sm">
      
      <img src={image} alt={title} className="sm:p-5 p-2 max-h-72 self-center " />
      
      <div>
      <div className="lg:text-base sm:text-sm text-xs  text-center border-y border-neutral-200 py-7 px-5 ">
        <h6>{title}</h6>
        <h6>{`${price} $`}</h6>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-3 p-4 lg:text-sm text-xs ">
        <span className="flex items-center gap-3 justify-center" >
          <HiEye size={'1rem'}/>
          View Detail
        </span>
 
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
