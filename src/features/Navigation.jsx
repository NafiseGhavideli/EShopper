import { Link } from "react-router-dom";
import { HiMiniBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

function Navigation() {
  const [isNavOpen, setIsNavOpen] =useState(false)
  return (
    <>
    <div className="md:hidden  border  p-2 rounded-md border-neutral-200 right-0" onClick={()=>setIsNavOpen(!isNavOpen)}>
    {isNavOpen ?<HiOutlineXMark  size={"1.5rem"} />:<HiMiniBars3 size={"1.5rem"}/>}</div> 
   
    <div className={`${isNavOpen?
    " absolute ":
      "hidden md:grid    "} 
      grid grid-row-5 grid-col-1 gap-4 p-8 right-0 top-14 z-20 bg-neutral-50 rounded-md md:static md:grid-cols-5 md:grid-rows-1 md:gap-1 md:rounded-none md:place-items-center md:border-t-2 md:border-neutral-100 md:p-0 md:pt-5 lg:text-base font-poppins text-xs`} >
     
      <Link to="/" className="tracking-widest md:place-self-end md:self-center" onClick={()=>setIsNavOpen(!isNavOpen)}>
        Home
      </Link>
      <Link to="/products" className="tracking-widest" onClick={()=>setIsNavOpen(!isNavOpen)}>
        Products
      </Link>
      <Link to="/cart" className="tracking-widest " onClick={()=>setIsNavOpen(!isNavOpen)}>
        Shopping Cart
      </Link>
      <Link to="/shopdetails" className="tracking-widest" onClick={()=>setIsNavOpen(!isNavOpen)}>
        Shop Details
      </Link>

      
      <Link to="Login" className="tracking-widest md:place-self-end md:self-center" onClick={()=>setIsNavOpen(!isNavOpen)}>
        Login
      </Link>
      
     
    </div>

    </>
     
    
  );
}

export default Navigation;
