import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Category from "./features/menu/category/Category";
import { menuLoader } from "./features/menu/menuLoader";
import { itemLoader } from "./features/menu/item/itemLoader";
import Item from "./features/menu/item/Item";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import { createOrderAction } from "./features/order/CreateOrderAction";
import Order from "./features/order/Order";
import {orderLoader} from "./features/order/orderLoader.js";
import { categoryLoader } from "./features/menu/category/categoryLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
        children: [
          {
            index: true,
            loader: () => redirect("/menu/Cakes"),
          },
          {
            path: "/menu/:categoryName",
            element: <Category />,
            loader: categoryLoader,
            errorElement: <Error />,
          },
          {
            path: "/menu/:categoryName/:itemId",
            element: <Item />,
            loader: itemLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
