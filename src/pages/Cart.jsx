import {  useSelector } from "react-redux";
import { getCart, getSubTotalCartPrice } from "../features/cart/cartSlice";
import CartItem from "../features/cart/CartItem";
import Empty from "../ui/Empty";


function Cart() {
  const cart = useSelector(getCart);
  const subtotal = useSelector(getSubTotalCartPrice);
  
  if (!cart.length) return <Empty/>;
  
  const shipping = Math.round(subtotal*0.1)
  const discount = Math.round(subtotal*0.05)

  return (
    <div className="flex md:gap-12 gap-24 md:flex-row flex-col">
    <ul className="divide-y divide-stone-200 basis-2/3">
    {cart.map((item,i)=><CartItem item={item} index={i} key={item.productId}/>)}
    </ul>

    <div className="md:grow font-poppins">
      <h2 className="text-lg bg-rose-500 md:py-5 py-3 rounded-lg text-white text-center tracking-wide font-semibold">Cart Summery</h2>
      <div className=" border-neutral-200 border-b-2 flex flex-col gap-3 text-base font-medium pb-5 mt-5 px-3">

      <div className="flex justify-between"><p>Subtotal</p><p>{subtotal}</p></div>
      <div className="flex justify-between"><p>Shipping</p><p>{`${shipping}.00`}</p></div>
      <div className="flex justify-between"><p>Discount</p><p>{`${discount}.00`}</p></div>
      </div>
    <div className="flex justify-between mt-5 px-3">
    <p className=" font-semibold text-lg">Total</p><p>{(subtotal+shipping) - discount}</p>
    </div>
    </div>
    </div>

  )
}

export default Cart
