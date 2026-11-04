import { Link } from "react-router";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/app/shop">Shop</Link>
      <Link to="/app/cart">Cart({props.quantity})</Link>
    </nav>
  );
}

export default Navbar;
