import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./home/Home.jsx";
import Cart from "./cart/Cart.jsx";
import Shop from "./shop/Shop.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
