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
    <li className="flex items-center justify-between font-poppins p-3">
      <div className="flex items-center justify-between gap-6">
      <span>{index+1}</span>
        <img src={image} alt={title} className="max-h-20 max-w-16 " />
        </div>
        <p className="px-4">{title}</p>

    <div className="flex items-center justify-between gap-6 ">
      <p className="text-md font-semibold">${price}</p>
    <button onClick={handleDeleteItem}><HiOutlineXCircle /></button>
    </div>
  </li>
  )
}

export default CartItem
