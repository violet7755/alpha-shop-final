import { useContext } from "react";
import { SubmitFormContext } from "../../FormContext";
import { CartContext } from "../../CartContext";
import styles from "./StepControl.module.scss";
import rightArrowIcon from "../../../../src/assets/icons/right-arrow.svg";
import leftArrowIcon from "../../../../src/assets/icons/left-arrow.svg";

export default function StepControl({ step, setStep }) {
  const { input } = useContext(SubmitFormContext);
  const { data } = useContext(CartContext);
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].quantity;
  }

  function handleNextStep() {
    if (step === "step1") {
      setStep("step2");
    } else if (step === "step2") {
      setStep("step3");
    } else {
      setStep(step);
    }
  }

  function handlePreStep() {
    if (step === "step2") {
      setStep("step1");
    } else if (step === "step3") {
      setStep("step2");
    } else {
      setStep(step);
    }
  }

  function handleFinalStep(e) {
    e.preventDefault();
    console.log(
      `name:${input.name}, cardNum:${input.cardNum}, exp:${input.exp}, CVC:${input.CVC}, TotalPrice: ${totalPrice}`
    );
  }

  function FirstStep() {
    return (
      <section className={styles.buttonGroup} data-step="step1">
        <button className={styles.next} onClick={handleNextStep}>
          下一步
          <img src={rightArrowIcon} alt="right-arrow" />
        </button>
      </section>
    );
  }

  function SecondStep() {
    return (
      <section className={styles.buttonGroup} data-step="step2">
        <button className={styles.previous} onClick={handlePreStep}>
          上一步
          <img src={leftArrowIcon} alt="left-arrow" />
        </button>
        <button className={styles.next} onClick={handleNextStep}>
          下一步
          <img src={rightArrowIcon} alt="right-arrow" />
        </button>
      </section>
    );
  }

  function ThirdStep() {
    return (
      <section className={styles.buttonGroup} data-step="step3">
        <button className={styles.previous} onClick={handlePreStep}>
          上一步
          <img src={leftArrowIcon} alt="left-arrow" />
        </button>
        <button className={styles.next} onClick={handleFinalStep}>
          確認下單
        </button>
      </section>
    );
  }

  return (
    <section className={styles.stepControlContainer}>
      {step === "step1" && <FirstStep />}
      {step === "step2" && <SecondStep />}
      {step === "step3" && <ThirdStep />}
    </section>
  );
}
