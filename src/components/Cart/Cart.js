import { useContext } from "react";
import styles from "./Cart.module.scss";
import CartProducts from "./CartItem";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { data, setData } = useContext(CartContext);
  let totalPrice = 0;
  data.forEach((data) => {
    totalPrice += data.price * data.quantity;
  });

  return (
    <section className={styles.cartSection}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <div className={styles.productList}>
        <CartProducts data={data} setData={setData} />
      </div>
      <div className={styles.shippingFee}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </div>
      <div className={styles.totalFee}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${totalPrice}</div>
      </div>
    </section>
  );
}
