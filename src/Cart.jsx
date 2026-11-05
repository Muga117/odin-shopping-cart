import { useOutletContext } from "react-router";
import "./Cart.css";

function Cart() {
  const [, , cart] = useOutletContext();

  if (cart.length === 0) {
    return <>Cart is Empty</>;
  }

  return (
    <>
      <ul className="cartContainer">
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} /> {item.title} {item.price} x{item.quantity}
          </li>
        ))}
      </ul>
      <p className="cartTotal">
        Total:$
        {cart
          .map((item) => item.price * item.quantity)
          .reduce((total, num) => {
            return total + num;
          })}
      </p>
    </>
  );
}

export default Cart;
