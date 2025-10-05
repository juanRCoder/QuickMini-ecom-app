import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";


const Products = lazy(() => import('@/pages/Products'));
const Cart = lazy(() => import('@/pages/Cart'));
const Checkout = lazy(() => import('@/pages/Checkout'));

export const mainRouter = createBrowserRouter([
  { path: "/", element: <Products /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> }
])