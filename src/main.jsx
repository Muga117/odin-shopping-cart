import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./home/Home.jsx";
import App from "./App.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "app",
    element: <App />,
    children: [
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
