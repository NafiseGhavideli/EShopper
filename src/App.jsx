import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {loader as productsLoader} from "./features/products/ProductsItems"
import { loader as categoriesLoader } from "./features/Categories";
import {loader as searchProductsLoader} from "./features/SearchProductsResults"
import { QuantityProvider } from "./services/QuantityContext";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Error from "./ui/Error";
import Cart from "./pages/Cart";
import ShopDetails from "./pages/ShopDetails";
import SearchProductsResults from "./features/SearchProductsResults";

/*eslint-disable*/
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader:categoriesLoader,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        loader: searchProductsLoader,
        element: <SearchProductsResults/>,
      },
      {
        path: "/products",
        loader:productsLoader,
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/cart",
        element:<Cart/>,
      },
      {
        path: "/shopdetails",
        element:<ShopDetails/>,
      },

    ],

    
  },
]);


function App() {

  return<QuantityProvider >
    <RouterProvider router={router}/>;
  </QuantityProvider> 
}

export default App;
