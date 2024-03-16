import { useContext, useEffect } from "react"
import { HiShoppingCart } from "react-icons/hi"
import QuantityContext from "../services/QuantityContext"
import { Link } from "react-router-dom"

function CartLogo() {
const {quantity} =useContext(QuantityContext)
const {setQuantity}=useContext(QuantityContext)

useEffect(()=>{
  quantity>=0? quantity : setQuantity(0)
  },[quantity,setQuantity])

  return (
    <Link to="/cart" className="flex border border-spacing-2 p-3 rounded-md border-neutral-200 items-center">
      <HiShoppingCart/>
      <div className="font-poppins ml-1">{quantity}</div>
    </Link>
  )
}

export default CartLogo
