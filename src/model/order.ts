import { IProduct } from "./product";
import { IPaymentInfo } from "./payment";
import { IUser } from "./user";

export interface IOrder {
  id?: string;
  product: IProduct | IProduct[];
  user: IUser;
  paymentInfo: IPaymentInfo;
}
