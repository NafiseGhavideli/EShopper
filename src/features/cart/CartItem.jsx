import { HiOutlineXCircle } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"
import QuantityContext from "../../services/QuantityContext"
import { useContext } from "react"

function CartItem({item,index}) {
  const dispatch=useDispatch()
  const {setQuantity}=useContext(QuantityContext) 
  const {productId, title , price,image }=item

  function handleDeleteItem(){
    setQuantity(quantity=>quantity-1)
    dispatch(deleteItem(productId))
  }
  return (
    <li className="flex items-center justify-between font-poppins py-3">
      <div className="flex items-center justify-between gap-4">
      <span>{index+1}</span>
        <img src={image} alt={title} className="max-h-20 max-w-16 " />
        <p className="lg:text-base text-xs px-4">{title}</p>
        </div>

    <div className="flex items-center justify-between gap-6 ">
      <p className="md:text-base text-xs font-semibold">${price}</p>
    <button onClick={handleDeleteItem}><HiOutlineXCircle /></button>
    </div>
  </li>
  )
}

export default CartItem
