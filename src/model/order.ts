import { IProduct } from "./product";
import { IPaymentInfo } from "./payment";
import { IUser } from "./user";

export interface IOrder {
  id?: string;
  firstName: string;
  lastName: string;
  address: string;
  product: Partial<IProduct>;
  paymentInfo?: Partial<IPaymentInfo>;
}

// An enum with all the types of actions to use in our reducer
export enum OrderActionKind {
  firstName = "firstName",
  lastName = "lastName",
  address = "address",
}
// An interface for our actions
export interface OrderAction {
  type: OrderActionKind;
  payload: string;
}
