import ProductsItems from "../features/products/ProductsItems";
import ProductsSidebar from "../features/products/ProductsSidebar";
import { useNavigation} from "react-router-dom";
import Loader from "../ui/Loader";


function Products() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex justify-between lg:flex-row xsm:flex-col" >
        <ProductsSidebar />
        <ProductsItems />
      </div>
    </>
  );
}

export default Products;
