import Logo from "../ui/Logo";
import SearchProducts from "../features/SearchProducts";
import CartLogo from "../ui/CartLogo";
import Navigation from "../features/Navigation"
import Categories from "../features/Categories"
import UserLogo from "../ui/UserLogo";


function Header() {

  return (
    <div className="py-6 lg:px-6 md:px-3">
      <div className="flex items-center xsm:mb-12 gap-x-5 md:gap-x-20 justify-between">
        <Logo />
        <SearchProducts />
        <div className="xsm:hidden lg:flex items-center justify-between gap-3">  
        <UserLogo/>
        <CartLogo/>
        </div>
      </div>
      <div className="flex justify-between gap-2 place-items-center relative">
        <Categories/> 
        <Navigation/> 
      </div>
     
    </div>
  );
}

export default Header;
{/* <HiOutlineShoppingCart />
import { HiOutlineShoppingCart } from "react-icons/hi"; */}