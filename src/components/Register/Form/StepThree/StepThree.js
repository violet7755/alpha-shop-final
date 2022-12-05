import { useContext } from "react";
import { SubmitFormContext } from "../../../FormContext";
import styles from "./StepThree.module.scss";

export default function StepThree() {
  const { input, setInput } = useContext(SubmitFormContext);

  function handleInputChange(e) {
    const value = e.target.value;
    const key = e.target.name;
    setInput({ ...input, [key]: value });
  }

  return (
    <section className={styles.stepThree}>
      <h3 className={styles.stepThreeTitle}>付款資訊</h3>
      <div className={styles.stepThreeContainer}>
        <div className={styles.group}>
          <div className={styles.groupName}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input
              type="text"
              placeholder="John Doe"
              id="input-cardOwner"
              name="name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.groupCardNum}>
            <div className={styles.inputLabel}>卡號</div>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              id="input-cardNum"
              name="cardNum"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.groupExp}>
            <div className={styles.inputLabel}>有效期限</div>
            <input
              type="text"
              placeholder="MM/YY"
              id="input-cardExp"
              name="exp"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.groupCvc}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input
              type="text"
              placeholder="123"
              id="input-cardCVC"
              name="CVC"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
