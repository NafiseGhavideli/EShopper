import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="flex grow justify-between border-t-2 border-neutral-100 pt-4">
     <div className="flex font-poppins gap-x-6 justify-between text-md">
      <Link to="/" className="tracking-widest">
        Home
      </Link>
      <Link to="/products" className="tracking-widest">
        Products
      </Link>
      <Link to="/cart" className="tracking-widest">
        Sopping Cart
      </Link>
      <Link to="/shopdetails" className="tracking-widest">
        Shop Details
      </Link>

     </div>

      <div className="font-poppins text-md">
      <Link to="Login" className="tracking-widest">
        Login
      </Link>
      </div>
    </div>

     
    
  );
}

export default Navigation;
