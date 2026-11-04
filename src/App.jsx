import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setItems(res));
  });
  return (
    <>
      <Navbar quantity={cart.length} />
      <Outlet context={[items, setItems, cart, setCart]} />
    </>
  );
}

export default App;
