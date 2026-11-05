import { Link } from "react-router";
import styles from "./Navbar.module.css";

function Navbar(props) {
  return (
    <nav>
      <Link className={styles.linkStyles} to="/">
        Home
      </Link>
      <Link className={styles.linkStyles} to="/app/shop">
        Shop
      </Link>
      <Link className={styles.linkStyles} to="/app/cart">
        Cart({props.quantity})
      </Link>
    </nav>
  );
}

export default Navbar;
