import { IOrder } from "@/model/order";
import { createContext, Dispatch } from "react";

type initialOrderContextType = {
  order?: IOrder;
  dispatch?: Dispatch<any>;
};
const initialOrderContext: initialOrderContextType = {
  order: {
    id: "0",
    firstName: "Arnob",
    lastName: "Ghosh",
    address: "Badda",
  },
  dispatch: () => {},
};
export const OrderContext =
  createContext<initialOrderContextType>(initialOrderContext);
