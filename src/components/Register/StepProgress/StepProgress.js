import styles from "./StepProgress.module.scss";

export default function StepProgress({ step }) {
  return (
    <section className={styles.stepperPanel}>
      <h2 className={styles.progressTitle}>結帳</h2>
      <div className={styles.stepperContainer}>
        <span className={styles.step}>
          <span className={styles.circleContainerActive}>1</span>
          <span className={styles.labelContainerActive}>寄送地址</span>
        </span>
        <span className={styles.step}>
          <span
            className={
              step === "step2" || step === "step3"
                ? styles.circleContainerActive
                : styles.circleContainer
            }
          >
            2
          </span>
          <span className={styles.connectLineActive}></span>
          <span
            className={
              step === "step2" || step === "step3"
                ? styles.labelContainerActive
                : styles.labelContainer
            }
          >
            運送方式
          </span>
        </span>
        <span className={styles.step}>
          <span
            className={
              step === "step3"
                ? styles.circleContainerActive
                : styles.circleContainer
            }
          >
            3
          </span>
          <span
            className={
              step === "step2" || step === "step3"
                ? styles.connectLineActive
                : styles.connectLine
            }
          ></span>
          <span
            className={
              step === "step3"
                ? styles.labelContainerActive
                : styles.labelContainer
            }
          >
            付款資訊
          </span>
        </span>
      </div>
    </section>
  );
}
