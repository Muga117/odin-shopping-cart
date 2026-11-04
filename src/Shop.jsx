import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";

function Shop() {
  const [items, setItems] = useOutletContext();
  const [, , cart, setCart] = useOutletContext();

  function addToCart(id, title, price, image, quantity) {
    setCart([...cart, { id, title, price, image, quantity }]);
  }

  return (
    <>
      <div className={styles.cardContainer}>
        {items.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.image} />
            <div className={styles.textContainer}>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            <div className={styles.btnContainer}>
              <div className={styles.amtBtnContainer}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const formData = new FormData(form);
                    const { quantity } = Object.fromEntries(formData.entries());
                    addToCart(
                      item.id,
                      item.title,
                      item.price,
                      item.image,
                      quantity,
                    );
                  }}
                >
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    defaultValue="1"
                  ></input>
                  <button type="submit">Add To Cart</button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
