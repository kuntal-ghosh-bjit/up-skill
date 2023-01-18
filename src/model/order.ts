import { IProduct } from "./product";
import { IPaymentInfo } from "./payment";
import { IUser } from "./user";

export interface IOrder {
  id?: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  city: string;
  products: Partial<IProduct>[];
  paymentInfo?: Partial<IPaymentInfo>;
}

// An enum with all the types of actions to use in our reducer
export enum OrderActionKind {
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  ADDRESS = "address",
  city = "city",
  country = "country",
  nameOnCard = "nameOnCard",
  cardNumber = "cardNumber",
  expiryDate = "expiryDate",
  cvv = "cvv",
  productQuantity = "",
  addProduct = "addProduct",
  deleteProduct = "deleteProduct",
}
// An interface for our actions
export interface OrderAction {
  type: OrderActionKind;
  payload: string;
}
