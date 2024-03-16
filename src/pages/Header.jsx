import Logo from "../ui/Logo";
import SearchProducts from "../features/SearchProducts";
import CartLogo from "../ui/CartLogo";
import Navigation from "../features/Navigation"
import Categories from "../features/Categories"
import UserLogo from "../ui/UserLogo";

function Header() {
  return (
    <div className="mb-8 px-6">
      <div className="flex items-center mb-3 gap-x-20 justify-between">
        <Logo />
        <SearchProducts />
        <div className="flex items-center justify-between gap-3">  
        <UserLogo/>
        <CartLogo/>
        </div>
      </div>
      <div className="flex gap-24 items-center">
       <Categories/>
       <Navigation/>
      </div>
     
    </div>
  );
}

export default Header;
{/* <HiOutlineShoppingCart />
import { HiOutlineShoppingCart } from "react-icons/hi"; */}