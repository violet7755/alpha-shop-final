import { createContext } from "react";

export const CreditCardContext = {
  name: " ",
  cardNum: " ",
  exp: " ",
  CVC: " ",
};

export const SubmitFormContext = createContext(CreditCardContext);
