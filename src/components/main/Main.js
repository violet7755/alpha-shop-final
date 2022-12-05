import StepProgress from "../Register/StepProgress/StepProgress";
import StepOne from "../Register/Form/StepOne/StepOne";
import StepTwo from "../Register/Form/StepTwo/StepTwo";
import StepThree from "../Register/Form/StepThree/StepThree";
import StepControl from "../Register/StepControl/StepControl";
import Cart from "../Cart/Cart";
import styles from "./Main.module.scss";
import { useState } from "react";
import { SubmitFormContext, CreditCardContext } from "../FormContext";
import { CartContext, CartItems } from "../CartContext";

export default function Main() {
  const [step, setStep] = useState("step1");
  const [data, setData] = useState(CartItems);
  const [input, setInput] = useState(CreditCardContext);
  return (
    <div className={styles.main}>
      <SubmitFormContext.Provider value={{ input, setInput }}>
        <CartContext.Provider value={{ data, setData }}>
          <div className={styles.formSection}>
            <StepProgress step={step} />
            <div className={styles.form}>
              {step === "step1" && <StepOne />}
              {step === "step2" && <StepTwo />}
              {step === "step3" && <StepThree />}
            </div>
            <StepControl step={step} setStep={setStep} />
          </div>
          <div className={styles.cartSection}>
            <Cart />
          </div>
        </CartContext.Provider>
      </SubmitFormContext.Provider>
    </div>
  );
}
