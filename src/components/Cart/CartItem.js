import styles from "./CartItem.module.scss";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

export default function CartProducts({ data, setData }) {
  function handleMinusClick(dataId) {
    let ItemData = data.map((data) => {
      if (data.id === dataId) {
        return {
          ...data,
          quantity: data.quantity - 1,
        };
      } else {
        return data;
      }
    });
    ItemData = ItemData.filter((i) => i.quantity > 0);
    setData(ItemData);
  }
  function handlePlusClick(dataId) {
    let ItemData = data.map((data) => {
      if (data.id === dataId) {
        return {
          ...data,
          quantity: data.quantity + 1,
        };
      } else {
        return data;
      }
    });
    setData(ItemData);
  }

  const products = data.map((product) => (
    <section className={styles.productSection} key={product.id}>
      <img className={styles.productImg} src={product.img} alt=""></img>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{product.name}</div>
        <div className={styles.productControlSection}>
          <button onClick={() => handleMinusClick(product.id)}>
            <img className={styles.icon} src={minus} alt="icon-minus" />
          </button>
          <span className={styles.productAmount}> {product.quantity} </span>
          <button onClick={() => handlePlusClick(product.id)}>
            <img className={styles.icon} src={plus} alt="icon-plus" />
          </button>
        </div>
      </div>
      <div className={styles.productPrice}>$ {product.price}</div>
    </section>
  ));
  return <>{products}</>;
}
